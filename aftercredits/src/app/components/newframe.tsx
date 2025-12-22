"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export default function NewFrame() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    let folderPath: string | null = null;
    try {
      if (files.length > 0) {
        setUploading(true);
        const supabase = createClient();
        // Create a unique folder for this memory based on timestamp
        const memoryFolderId = Date.now();
        folderPath = `memories/${memoryFolderId}`;

        // Upload all files to the folder
        for (const file of files) {
          const filePath = `${folderPath}/${file.name}`;
          const { error: uploadError } = await supabase.storage
            .from("memories")
            .upload(filePath, file);

          if (uploadError) throw uploadError;
        }

        setUploading(false);
      }

      // include authenticated user id when available
      let userId: string | null = null;
      try {
        const { data: userData } = await createClient().auth.getUser();
        userId = userData?.user?.id ?? null;
      } catch (err) {
        // ignore - user may not be signed in
      }

      console.log({
        title,
        date,
        location,
        description,
        folderPath,
        fileCount: files.length,
      });

      const res = await fetch("/api/memory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          date,
          location,
          description,
          imagePath: folderPath, // Store the folder path
          userId,
        }),
      });
      if (!res.ok) throw new Error("Failed to create memory");

      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Failed to save memory");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];

    if (selectedFiles.length === 0) {
      setFiles([]);
      setPreviewUrls([]);
      setFileError(null);
      return;
    }

    const validFiles: File[] = [];
    const newPreviews: string[] = [];
    const errors: string[] = [];

    selectedFiles.forEach((f) => {
      if (!f.type.startsWith("image/")) {
        errors.push(`${f.name} is not an image`);
        return;
      }
      if (f.size > 5 * 1024 * 1024) {
        errors.push(`${f.name} exceeds 5MB limit`);
        return;
      }
      validFiles.push(f);
      newPreviews.push(URL.createObjectURL(f));
    });

    if (errors.length > 0) {
      setFileError(errors.join("; "));
    } else {
      setFileError(null);
    }

    setFiles(validFiles);
    setPreviewUrls(newPreviews);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previewUrls.filter((_, i) => i !== index);
    URL.revokeObjectURL(previewUrls[index]);
    setFiles(newFiles);
    setPreviewUrls(newPreviews);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Add a New Memory</h1>
          <p className="text-gray-400 text-sm">
            Capture a special moment together
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl w-full space-y-4">
          <div>
            <label className="block text-sm">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-black/60 border border-border"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-black/60 border border-border"
                required
              />
            </div>
            <div>
              <label className="block text-sm">Location</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-black/60 border border-border"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-black/60 border border-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Photos (Multiple)
            </label>
            <input
              className="border-2 border-dashed border-red-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-red-600 hover:bg-black/40 transition-all duration-300 w-full"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            {fileError && (
              <p className="text-sm text-red-500 mt-1">{fileError}</p>
            )}
            {previewUrls.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">
                  {files.length} image(s) selected
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {previewUrls.map((url, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={url}
                        alt={`preview-${idx}`}
                        className="w-full h-24 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || uploading || files.length === 0}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-60"
            >
              {uploading
                ? "Uploading images…"
                : loading
                ? "Saving…"
                : "Save Memory"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
/* old content removed */
