"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload } from "lucide-react";

// This should match your actual Supabase client utility
import { createClient } from "../../utils/supabase/client";

type FormDataShape = {
  title: string;
  date: string;
  location: string;
  whatWeDid: string;
  thoughts: string;
};

type Photo = {
  file: File;
  previewUrl: string;
  name: string;
  uploaded: boolean;
  storagePath: string | null;
};

export default function AddMemoryForm() {
  const [formData, setFormData] = useState<FormDataShape>({
    title: "",
    date: "",
    location: "",
    whatWeDid: "",
    thoughts: "",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<Photo[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      // revoke any still-active preview URLs when the component unmounts
      uploadedPhotos.forEach((photo) => {
        if (photo.previewUrl) URL.revokeObjectURL(photo.previewUrl);
      });
    };
    // Intentionally only run on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");

    // Format as mm/dd/yyyy
    let formatted = "";
    if (numbers.length > 0) {
      formatted = numbers.substring(0, 2);
      if (numbers.length > 2) {
        formatted += "/" + numbers.substring(2, 4);
      }
      if (numbers.length > 4) {
        formatted += "/" + numbers.substring(4, 8);
      }
    }

    return formatted;
  };

  const handleInputChange = (field: keyof FormDataShape, value: string) => {
    if (field === "date") {
      value = formatDate(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;
    const files = Array.from(fileList);

    // Validate files
    const validFiles: File[] = [];
    const fileErrors: string[] = [];

    files.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        fileErrors.push(`${file.name} is not an image`);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        fileErrors.push(`${file.name} is larger than 5MB`);
        return;
      }
      validFiles.push(file);
    });

    if (fileErrors.length > 0) {
      setErrors((prev) => ({
        ...prev,
        photos: fileErrors.join(", "),
      }));
    }

    // Create preview URLs for valid files
    const newPhotos: Photo[] = validFiles.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
      name: file.name,
      uploaded: false,
      storagePath: null,
    }));

    setUploadedPhotos((prev) => [...prev, ...newPhotos]);

    // Clear photos error if there were valid files
    if (validFiles.length > 0 && errors.photos) {
      setErrors((prev) => ({
        ...prev,
        photos: "",
      }));
    }
  };

  const removePhoto = (index: number) => {
    const photo = uploadedPhotos[index];
    if (photo.previewUrl) {
      URL.revokeObjectURL(photo.previewUrl);
    }
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadPhotosToSupabase = async (): Promise<string[] | null> => {
    if (uploadedPhotos.length === 0) return [];

    setUploading(true);
    const uploadedPaths = [];

    try {
      const supabase = createClient();

      for (let i = 0; i < uploadedPhotos.length; i++) {
        const photo = uploadedPhotos[i];

        if (photo.uploaded && photo.storagePath) {
          // Already uploaded
          uploadedPaths.push(photo.storagePath);
          continue;
        }

        // Sanitize filename and upload to server-side endpoint
        const safeName = photo.file.name
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-_.]/g, "");
        const filePath = `memories/${Date.now()}-${safeName}`;

        // Upload via server endpoint which uses the service role key
        const form = new FormData();
        form.append("file", photo.file);
        form.append("path", filePath);

        const uploadRes = await fetch("/api/storage/upload", {
          method: "POST",
          body: form,
        });
        const uploadJson = await uploadRes.json();
        if (!uploadRes.ok) {
          // surface a helpful message for common RLS errors
          const msg = uploadJson?.error ?? `Failed to upload ${photo.name}`;
          if (msg.includes("row-level security")) {
            throw new Error(
              `Failed to upload ${photo.name}: storage policy prevents anonymous uploads. Please sign in or use the server upload.`
            );
          }
          throw new Error(`Failed to upload ${photo.name}: ${msg}`);
        }

        uploadedPaths.push(uploadJson.path || filePath);

        // Mark as uploaded immutably
        setUploadedPhotos((prev) =>
          prev.map((p, idx) =>
            idx === i
              ? {
                  ...p,
                  uploaded: true,
                  storagePath: uploadJson.path || filePath,
                }
              : p
          )
        );
      }

      return uploadedPaths;
    } catch (error: any) {
      console.error("Upload error:", error);
      setErrors((prev) => ({
        ...prev,
        photos: error.message || "Failed to upload photos",
      }));
      return null;
    } finally {
      setUploading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    } else if (formData.date.length < 10) {
      newErrors.date = "Please enter a complete date (mm/dd/yyyy)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onFormSubmit = async () => {
    setSaving(true);

    try {
      // First, upload all photos to Supabase Storage
      const imagePaths = await uploadPhotosToSupabase();

      if (imagePaths === null) {
        // Upload failed
        setSaving(false);
        return;
      }

      // Get authenticated user ID if available
      let userId = null;
      /* Uncomment to get actual user:
      try {
        const supabase = createClient();
        const { data: userData } = await supabase.auth.getUser();
        userId = userData?.user?.id ?? null;
      } catch (err) {
        console.log('User not authenticated');
      }
      */

      // Parse date from mm/dd/yyyy to ISO format (safely)
      const [month, day, year] = formData.date.split("/");
      let isoDate: string | null = null;
      if (month && day && year) {
        const d = new Date(`${year}-${month}-${day}`);
        if (!Number.isNaN(d.getTime())) isoDate = d.toISOString();
      }

      // Prepare the payload
      const payload = {
        title: formData.title,
        date: isoDate,
        location: formData.location || null,
        description:
          `${formData.whatWeDid}\n\n${formData.thoughts}`.trim() || null,
        imagePath: imagePaths.length > 0 ? imagePaths[0] : null, // Store first image path
        userId: userId,
      };

      console.log("Submitting payload:", payload);

      // Submit to API
      const response = await fetch("/api/memory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let message = "Failed to save memory";
        try {
          const errJson = await response.json();
          message = errJson?.error ?? errJson?.message ?? message;
        } catch {
          // ignore
        }
        throw new Error(message);
      }

      const result = await response.json();
      console.log("Memory saved:", result);

      // Clear form on success
      setFormData({
        title: "",
        date: "",
        location: "",
        whatWeDid: "",
        thoughts: "",
      });

      // Clean up uploaded photos
      setUploadedPhotos((prev) => {
        prev.forEach((photo) => {
          if (photo.previewUrl) URL.revokeObjectURL(photo.previewUrl);
        });
        return [];
      });
      setErrors({});

      alert("Memory saved successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      setErrors((prev) => ({
        ...prev,
        submit: (error as any)?.message || "Failed to save memory",
      }));
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      await onFormSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Add a New Memory</h1>
          <p className="text-gray-400 text-sm">
            Capture a special moment together
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-8 space-y-6"
        >
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              onFocus={() => setFocusedField("title")}
              onBlur={() => setFocusedField(null)}
              placeholder="Our picnic at the park"
              className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                focusedField === "title"
                  ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : errors.title
                  ? "border-red-500"
                  : "border-red-900/50"
              } focus:outline-none`}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              onFocus={() => setFocusedField("date")}
              onBlur={() => setFocusedField(null)}
              placeholder="mm/dd/yyyy, --:-- --"
              maxLength={10}
              className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                focusedField === "date"
                  ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : errors.date
                  ? "border-red-500"
                  : "border-red-900/50"
              } focus:outline-none`}
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              onFocus={() => setFocusedField("location")}
              onBlur={() => setFocusedField(null)}
              placeholder="Central Park"
              className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                focusedField === "location"
                  ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : "border-red-900/50"
              } focus:outline-none`}
            />
          </div>

          {/* What We Did Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              What we did
            </label>
            <textarea
              value={formData.whatWeDid}
              onChange={(e) => handleInputChange("whatWeDid", e.target.value)}
              onFocus={() => setFocusedField("whatWeDid")}
              onBlur={() => setFocusedField(null)}
              placeholder="Had sandwiches, played frisbee, watched the sunset..."
              rows={3}
              className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none ${
                focusedField === "whatWeDid"
                  ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : "border-red-900/50"
              } focus:outline-none`}
            />
          </div>

          {/* Thoughts & Reflections Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Our thoughts & reflections
            </label>
            <textarea
              value={formData.thoughts}
              onChange={(e) => handleInputChange("thoughts", e.target.value)}
              onFocus={() => setFocusedField("thoughts")}
              onBlur={() => setFocusedField(null)}
              placeholder="The weather was perfect. We laughed so much. I never want to forget this day..."
              rows={4}
              className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none ${
                focusedField === "thoughts"
                  ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : "border-red-900/50"
              } focus:outline-none`}
            />
          </div>

          {/* Photos Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Photos</label>

            {/* Upload Area */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-red-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-red-600 hover:bg-black/40 transition-all duration-300"
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-400 text-sm">Click to upload photos</p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />

            {errors.photos && (
              <p className="text-red-500 text-xs mt-2">{errors.photos}</p>
            )}

            {/* Uploaded Photos Preview */}
            {uploadedPhotos.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {uploadedPhotos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={photo.previewUrl}
                      alt={photo.name}
                      className="w-full h-24 object-cover rounded border-2 border-red-900/30"
                    />
                    {photo.uploaded && (
                      <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        ✓
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading || saving}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading
              ? "Uploading photos..."
              : saving
              ? "Saving memory..."
              : "Save Memory"}
          </button>

          {errors.submit && (
            <p className="text-red-500 text-sm text-center">{errors.submit}</p>
          )}
        </form>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-8 right-8 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition">
        ?
      </button>
    </div>
  );
}
