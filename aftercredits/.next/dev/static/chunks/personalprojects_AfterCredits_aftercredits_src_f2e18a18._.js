(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/personalprojects/AfterCredits/aftercredits/src/utils/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jkjweynermbppxrllqfn.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_U--rHrGH_6NbVS3wZRd9ow__siELIMK");
const createClient = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMemoryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/navigation.js [app-client] (ecmascript)");
// This should match your actual Supabase client utility
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/utils/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddMemoryForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        date: "",
        location: "",
        whatWeDid: "",
        thoughts: ""
    });
    const [uploadedPhotos, setUploadedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Cleanup preview URLs on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddMemoryForm.useEffect": ()=>{
            return ({
                "AddMemoryForm.useEffect": ()=>{
                    // revoke any still-active preview URLs when the component unmounts
                    uploadedPhotos.forEach({
                        "AddMemoryForm.useEffect": (photo)=>{
                            if (photo.previewUrl) URL.revokeObjectURL(photo.previewUrl);
                        }
                    }["AddMemoryForm.useEffect"]);
                }
            })["AddMemoryForm.useEffect"];
        // Intentionally only run on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AddMemoryForm.useEffect"], []);
    const formatDate = (value)=>{
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
    const handleInputChange = (field, value)=>{
        if (field === "date") {
            value = formatDate(value);
        }
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: ""
                }));
        }
    };
    const handlePhotoUpload = (e)=>{
        const fileList = e.target.files;
        if (!fileList || fileList.length === 0) return;
        const files = Array.from(fileList);
        // Validate files
        const validFiles = [];
        const fileErrors = [];
        files.forEach((file)=>{
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
            setErrors((prev)=>({
                    ...prev,
                    photos: fileErrors.join(", ")
                }));
        }
        // Create preview URLs for valid files
        const newPhotos = validFiles.map((file)=>({
                file,
                previewUrl: URL.createObjectURL(file),
                name: file.name,
                uploaded: false,
                storagePath: null
            }));
        setUploadedPhotos((prev)=>[
                ...prev,
                ...newPhotos
            ]);
        // Clear photos error if there were valid files
        if (validFiles.length > 0 && errors.photos) {
            setErrors((prev)=>({
                    ...prev,
                    photos: ""
                }));
        }
    };
    const removePhoto = (index)=>{
        const photo = uploadedPhotos[index];
        if (photo.previewUrl) {
            URL.revokeObjectURL(photo.previewUrl);
        }
        setUploadedPhotos((prev)=>prev.filter((_, i)=>i !== index));
    };
    const uploadPhotosToSupabase = async ()=>{
        if (uploadedPhotos.length === 0) return [];
        setUploading(true);
        const uploadedPaths = [];
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            for(let i = 0; i < uploadedPhotos.length; i++){
                const photo = uploadedPhotos[i];
                if (photo.uploaded && photo.storagePath) {
                    // Already uploaded
                    uploadedPaths.push(photo.storagePath);
                    continue;
                }
                // Sanitize filename and upload to server-side endpoint
                const safeName = photo.file.name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_.]/g, "");
                const filePath = `memories/${Date.now()}-${safeName}`;
                // Upload via server endpoint which uses the service role key
                const form = new FormData();
                form.append("file", photo.file);
                form.append("path", filePath);
                const uploadRes = await fetch("/api/storage/upload", {
                    method: "POST",
                    body: form
                });
                const uploadJson = await uploadRes.json();
                if (!uploadRes.ok) {
                    // surface a helpful message for common RLS errors
                    const msg = uploadJson?.error ?? `Failed to upload ${photo.name}`;
                    if (msg.includes("row-level security")) {
                        throw new Error(`Failed to upload ${photo.name}: storage policy prevents anonymous uploads. Please sign in or use the server upload.`);
                    }
                    throw new Error(`Failed to upload ${photo.name}: ${msg}`);
                }
                uploadedPaths.push(uploadJson.path || filePath);
                // Mark as uploaded immutably
                setUploadedPhotos((prev)=>prev.map((p, idx)=>idx === i ? {
                            ...p,
                            uploaded: true,
                            storagePath: uploadJson.path || filePath
                        } : p));
            }
            return uploadedPaths;
        } catch (error) {
            console.error("Upload error:", error);
            setErrors((prev)=>({
                    ...prev,
                    photos: error.message || "Failed to upload photos"
                }));
            return null;
        } finally{
            setUploading(false);
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
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
    const onFormSubmit = async ()=>{
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
    */ // Parse date from mm/dd/yyyy to ISO format (safely)
            const [month, day, year] = formData.date.split("/");
            let isoDate = null;
            if (month && day && year) {
                const d = new Date(`${year}-${month}-${day}`);
                if (!Number.isNaN(d.getTime())) isoDate = d.toISOString();
            }
            // Prepare the payload with array of image paths
            const payload = {
                title: formData.title,
                date: isoDate,
                location: formData.location || null,
                description: `${formData.whatWeDid}\n\n${formData.thoughts}`.trim() || null,
                imagePaths: imagePaths,
                userId: userId
            };
            console.log("Submitting payload:", payload);
            // Submit to API
            const response = await fetch("/api/memory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                let message = "Failed to save memory";
                try {
                    const errJson = await response.json();
                    message = errJson?.error ?? errJson?.message ?? message;
                } catch  {
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
                thoughts: ""
            });
            // Clean up uploaded photos
            setUploadedPhotos((prev)=>{
                prev.forEach((photo)=>{
                    if (photo.previewUrl) URL.revokeObjectURL(photo.previewUrl);
                });
                return [];
            });
            setErrors({});
            router.push("/");
        } catch (error) {
            console.error("Submission error:", error);
            setErrors((prev)=>({
                    ...prev,
                    submit: error?.message || "Failed to save memory"
                }));
        } finally{
            setSaving(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (validateForm()) {
            await onFormSubmit();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-#251a1d via-#1a1315 to-#251a1d text-white flex items-center justify-center px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl tracking-wider",
                            style: {
                                color: "var(--accent)"
                            },
                            children: "ADD A NEW MEMORY"
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm tracking-widest mt-2",
                            children: "CAPTURE A SPECIAL MOMENT TOGETHER"
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "bg-black/40 backdrop-blur-sm border rounded-lg p-8 space-y-6",
                    style: {
                        borderColor: "var(--border)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold mb-2 uppercase tracking-widest",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: [
                                        "Title ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--destructive)"
                                            },
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                            lineNumber: 373,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.title,
                                    onChange: (e)=>handleInputChange("title", e.target.value),
                                    onFocus: ()=>setFocusedField("title"),
                                    onBlur: ()=>setFocusedField(null),
                                    placeholder: "Our picnic at the park",
                                    className: "w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none",
                                    style: {
                                        borderColor: focusedField === "title" ? "var(--accent)" : errors.title ? "var(--destructive)" : "var(--border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-1",
                                    style: {
                                        color: "var(--destructive)"
                                    },
                                    children: errors.title
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold mb-2 uppercase tracking-widest",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: [
                                        "Date ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--destructive)"
                                            },
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                            lineNumber: 408,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.date,
                                    onChange: (e)=>handleInputChange("date", e.target.value),
                                    onFocus: ()=>setFocusedField("date"),
                                    onBlur: ()=>setFocusedField(null),
                                    placeholder: "mm/dd/yyyy, --:-- --",
                                    maxLength: 10,
                                    className: "w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none",
                                    style: {
                                        borderColor: focusedField === "date" ? "var(--accent)" : errors.date ? "var(--destructive)" : "var(--border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this),
                                errors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-1",
                                    style: {
                                        color: "var(--destructive)"
                                    },
                                    children: errors.date
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold mb-2 uppercase tracking-widest",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.location,
                                    onChange: (e)=>handleInputChange("location", e.target.value),
                                    onFocus: ()=>setFocusedField("location"),
                                    onBlur: ()=>setFocusedField(null),
                                    placeholder: "Central Park",
                                    className: "w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none",
                                    style: {
                                        borderColor: focusedField === "location" ? "var(--accent)" : "var(--border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold mb-2 uppercase tracking-widest",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: "What we did"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.whatWeDid,
                                    onChange: (e)=>handleInputChange("whatWeDid", e.target.value),
                                    onFocus: ()=>setFocusedField("whatWeDid"),
                                    onBlur: ()=>setFocusedField(null),
                                    placeholder: "Had sandwiches, played frisbee, watched the sunset...",
                                    rows: 3,
                                    className: "w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none focus:outline-none",
                                    style: {
                                        borderColor: focusedField === "whatWeDid" ? "var(--accent)" : "var(--border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold mb-2 uppercase tracking-widest",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: "Our thoughts & reflections"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.thoughts,
                                    onChange: (e)=>handleInputChange("thoughts", e.target.value),
                                    onFocus: ()=>setFocusedField("thoughts"),
                                    onBlur: ()=>setFocusedField(null),
                                    placeholder: "The weather was perfect. We laughed so much. I never want to forget this day...",
                                    rows: 4,
                                    className: "w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none focus:outline-none",
                                    style: {
                                        borderColor: focusedField === "thoughts" ? "var(--accent)" : "var(--border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold mb-2 uppercase tracking-widest",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: "Photos"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-black/40 transition-all duration-300",
                                    style: {
                                        borderColor: "var(--border)"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.borderColor = "var(--accent)",
                                    onMouseLeave: (e)=>e.currentTarget.style.borderColor = "var(--border)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-8 h-8 mx-auto mb-2 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Click to upload photos"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    multiple: true,
                                    accept: "image/*",
                                    onChange: handlePhotoUpload,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this),
                                errors.photos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-2",
                                    style: {
                                        color: "var(--destructive)"
                                    },
                                    children: errors.photos
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this),
                                uploadedPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid grid-cols-3 gap-3",
                                    children: uploadedPhotos.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: photo.previewUrl,
                                                    alt: photo.name,
                                                    className: "w-full h-24 object-cover rounded border-2",
                                                    style: {
                                                        borderColor: "var(--accent)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this),
                                                photo.uploaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>removePhoto(index),
                                                    className: "absolute top-1 right-1 w-6 h-6 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs",
                                                    style: {
                                                        backgroundColor: "var(--destructive)"
                                                    },
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                                    lineNumber: 558,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: uploading || saving,
                            className: "w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm",
                            style: {
                                backgroundColor: "var(--primary)"
                            },
                            onMouseEnter: (e)=>!uploading && !saving && (e.currentTarget.style.backgroundColor = "var(--accent)"),
                            onMouseLeave: (e)=>!uploading && !saving && (e.currentTarget.style.backgroundColor = "var(--primary)"),
                            children: uploading ? "Uploading photos..." : saving ? "Saving memory..." : "Save Memory"
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 587,
                            columnNumber: 11
                        }, this),
                        errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-center",
                            style: {
                                color: "var(--destructive)"
                            },
                            children: errors.submit
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
            lineNumber: 347,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/addmemoryform.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_s(AddMemoryForm, "rquMwJ3NzCb14PHX63J6YnPmLR8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddMemoryForm;
var _c;
__turbopack_context__.k.register(_c, "AddMemoryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=personalprojects_AfterCredits_aftercredits_src_f2e18a18._.js.map