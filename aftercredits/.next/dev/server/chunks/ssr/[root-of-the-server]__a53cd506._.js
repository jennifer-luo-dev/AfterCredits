module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/utils/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jkjweynermbppxrllqfn.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_U--rHrGH_6NbVS3wZRd9ow__siELIMK");
const createClient = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseKey);
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/utils/supabase/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NewFrame() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileError, setFileError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        let imagePath = null;
        try {
            if (file) {
                setUploading(true);
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
                const filePath = `memories/${Date.now()}-${file.name}`;
                const { error: uploadError } = await supabase.storage.from("memories").upload(filePath, file);
                if (uploadError) throw uploadError;
                // For private storage, store the file path and let the server generate signed URLs on demand
                imagePath = filePath;
                setUploading(false);
            }
            // include authenticated user id when available
            let userId = null;
            try {
                const { data: userData } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])().auth.getUser();
                userId = userData?.user?.id ?? null;
            } catch (err) {
            // ignore - user may not be signed in
            }
            const res = await fetch("/api/memory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    date,
                    location,
                    description,
                    imagePath,
                    userId
                })
            });
            if (!res.ok) throw new Error("Failed to create memory");
            router.push("/");
        } catch (err) {
            console.error(err);
            alert("Failed to save memory");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [
        previewUrl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "Add a New Memory"
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Capture a special moment together"
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "max-w-2xl w-full space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm",
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    className: "w-full px-3 py-2 rounded-md bg-black/60 border border-border"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: date,
                                            onChange: (e)=>setDate(e.target.value),
                                            className: "w-full px-3 py-2 rounded-md bg-black/60 border border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: location,
                                            onChange: (e)=>setLocation(e.target.value),
                                            className: "w-full px-3 py-2 rounded-md bg-black/60 border border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value),
                                    className: "w-full px-3 py-2 rounded-md bg-black/60 border border-border"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Photos"
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "border-2 border-dashed border-red-900/50 rounded-lg p-8 text-center cursor-pointer hover:border-red-600 hover:bg-black/40 transition-all duration-300",
                                    type: "file",
                                    accept: "image/*",
                                    onChange: (e)=>{
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
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                fileError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-500 mt-1",
                                    children: fileError
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                previewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: previewUrl,
                                                alt: "preview",
                                                className: "w-48 h-32 object-cover rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setFile(null);
                                                        setPreviewUrl(null);
                                                    },
                                                    className: "text-sm text-red-500",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading || uploading,
                                className: "w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-red-600/50 bg-primary disabled:opacity-60",
                                children: uploading ? "Uploading image…" : loading ? "Saving…" : "Save Memory"
                            }, void 0, false, {
                                fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/personalprojects/AfterCredits/aftercredits/src/app/components/newframe.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
} /* old content removed */ 
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a53cd506._.js.map