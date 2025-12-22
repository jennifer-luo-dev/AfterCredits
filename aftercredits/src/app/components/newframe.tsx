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
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    let imagePath: string | null = null;
    try {
      if (file) {
        setUploading(true);
        const supabase = createClient();
        const filePath = `memories/${Date.now()}-${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from("memories")
          .upload(filePath, file);

        if (uploadError) throw uploadError;
        // For private storage, store the file path and let the server generate signed URLs on demand
        imagePath = filePath;
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
        imagePath,
        file,
      });

      const res = await fetch("/api/memory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          date,
          location,
          description,
          imagePath,
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
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

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
            <label className="block text-sm font-medium mb-2">Photos</label>
            <input
              className="border-2 border-dashed border-red-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-red-600 hover:bg-black/40 transition-all duration-300"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0] ?? null;
                if (!f) {
                  setFile(null);
                  setPreviewUrl(null);
                  setFileError(null);
                  return;
                }
                if (!f.type.startsWith("image/")) {
                  setFile(null);
                  setPreviewUrl(null);
                  setFileError("Please select an image file");
                  return;
                }
                if (f.size > 5 * 1024 * 1024) {
                  setFile(null);
                  setPreviewUrl(null);
                  setFileError("Image must be smaller than 5MB");
                  return;
                }
                setFileError(null);
                setFile(f);
                setPreviewUrl(URL.createObjectURL(f));
              }}
            />
            {fileError && (
              <p className="text-sm text-red-500 mt-1">{fileError}</p>
            )}
            {previewUrl && (
              <div className="mt-2">
                <div className="flex items-start gap-3">
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="w-48 h-32 object-cover rounded"
                  />
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setPreviewUrl(null);
                      }}
                      className="text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || uploading}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-red-600/50 bg-primary disabled:opacity-60"
            >
              {uploading
                ? "Uploading image…"
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
