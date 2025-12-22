module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMemoryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/lucide-react/dist/esm/icons/upload.js [app-rsc] (ecmascript) <export default as Upload>");
;
;
;
function AddMemoryForm() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        date: "",
        location: "",
        whatWeDid: "",
        thoughts: ""
    });
    const [uploadedPhotos, setUploadedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({});
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
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
        const files = Array.from(e.target.files);
        const newPhotos = files.map((file)=>({
                file,
                url: URL.createObjectURL(file),
                name: file.name
            }));
        setUploadedPhotos((prev)=>[
                ...prev,
                ...newPhotos
            ]);
        // Clear photos error
        if (errors.photos) {
            setErrors((prev)=>({
                    ...prev,
                    photos: ""
                }));
        }
    };
    const removePhoto = (index)=>{
        setUploadedPhotos((prev)=>prev.filter((_, i)=>i !== index));
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
    const onFormSubmit = ()=>{
        // Clear all form fields
        setFormData({
            title: "",
            date: "",
            location: "",
            whatWeDid: "",
            thoughts: ""
        });
        setUploadedPhotos([]);
        setErrors({});
        console.log("Form submitted successfully!");
    // You can add your submission logic here
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data:", formData);
            console.log("Photos:", uploadedPhotos);
            onFormSubmit();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-2",
                                children: "Add a New Memory"
                            }, void 0, false, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: "Capture a special moment together"
                            }, void 0, false, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-8 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-2",
                                        children: [
                                            "Title ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.title,
                                        onChange: (e)=>handleInputChange("title", e.target.value),
                                        onFocus: ()=>setFocusedField("title"),
                                        onBlur: ()=>setFocusedField(null),
                                        placeholder: "Our picnic at the park",
                                        className: `w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${focusedField === "title" ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]" : errors.title ? "border-red-500" : "border-red-900/50"} focus:outline-none`
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs mt-1",
                                        children: errors.title
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-2",
                                        children: [
                                            "Date ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 163,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.date,
                                        onChange: (e)=>handleInputChange("date", e.target.value),
                                        onFocus: ()=>setFocusedField("date"),
                                        onBlur: ()=>setFocusedField(null),
                                        placeholder: "mm/dd/yyyy, --:-- --",
                                        maxLength: 10,
                                        className: `w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${focusedField === "date" ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]" : errors.date ? "border-red-500" : "border-red-900/50"} focus:outline-none`
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    errors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs mt-1",
                                        children: errors.date
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-2",
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.location,
                                        onChange: (e)=>handleInputChange("location", e.target.value),
                                        onFocus: ()=>setFocusedField("location"),
                                        onBlur: ()=>setFocusedField(null),
                                        placeholder: "Central Park",
                                        className: `w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 ${focusedField === "location" ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]" : "border-red-900/50"} focus:outline-none`
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-2",
                                        children: "What we did"
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: formData.whatWeDid,
                                        onChange: (e)=>handleInputChange("whatWeDid", e.target.value),
                                        onFocus: ()=>setFocusedField("whatWeDid"),
                                        onBlur: ()=>setFocusedField(null),
                                        placeholder: "Had sandwiches, played frisbee, watched the sunset...",
                                        rows: 3,
                                        className: `w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none ${focusedField === "whatWeDid" ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]" : "border-red-900/50"} focus:outline-none`
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-2",
                                        children: "Our thoughts & reflections"
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: formData.thoughts,
                                        onChange: (e)=>handleInputChange("thoughts", e.target.value),
                                        onFocus: ()=>setFocusedField("thoughts"),
                                        onBlur: ()=>setFocusedField(null),
                                        placeholder: "The weather was perfect. We laughed so much. I never want to forget this day...",
                                        rows: 4,
                                        className: `w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none ${focusedField === "thoughts" ? "border-red-600 ring-2 ring-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.5)]" : "border-red-900/50"} focus:outline-none`
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-2",
                                        children: "Photos"
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>fileInputRef.current?.click(),
                                        className: "border-2 border-dashed border-red-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-red-600 hover:bg-black/40 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-8 h-8 mx-auto mb-2 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-sm",
                                                children: "Click to upload photos"
                                            }, void 0, false, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        multiple: true,
                                        accept: "image/*",
                                        onChange: handlePhotoUpload,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    uploadedPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-3 gap-3",
                                        children: uploadedPhotos.map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: photo.url,
                                                        alt: photo.name,
                                                        className: "w-full h-24 object-cover rounded border-2 border-red-900/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>removePhoto(index),
                                                        className: "absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs",
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                className: "w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-red-600/50",
                                children: "Save Memory"
                            }, void 0, false, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "fixed bottom-8 right-8 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition",
                children: "?"
            }, void 0, false, {
                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/newframe/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$app$2f$components$2f$newframe$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$app$2f$components$2f$newframe$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/newframe/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/newframe/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/app/newframe/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9596a2a3._.js.map