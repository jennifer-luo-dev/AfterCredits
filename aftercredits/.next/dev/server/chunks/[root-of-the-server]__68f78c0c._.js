module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/personalprojects/AfterCredits/aftercredits/node_modules/@prisma/client)");
;
const prisma = global.__prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) global.__prisma = prisma;
}),
"[project]/personalprojects/AfterCredits/aftercredits/src/app/api/memory/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://jkjweynermbppxrllqfn.supabase.co");
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) : null;
async function GET(request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    // Build options dynamically and avoid strict typing issues
    const findOptions = {
        orderBy: {
            createdAt: "desc"
        }
    };
    if (userId) findOptions.where = {
        userId
    };
    const memories = await __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].memory.findMany(findOptions);
    // If we have a SUPABASE_SERVICE_ROLE_KEY, generate short-lived signed urls for private images
    if (supabaseAdmin) {
        const withUrls = await Promise.all(memories.map(async (m)=>{
            const result = {
                ...m
            };
            // Handle imagePath (legacy single image)
            if (m.imagePath) {
                try {
                    // Check if imagePath is a folder by trying to list its contents
                    const { data: files, error: listError } = await supabaseAdmin.storage.from("memories").list(m.imagePath);
                    if (!listError && files && files.length > 0) {
                        // imagePath is a folder - get the first file
                        const firstFile = files.find((f)=>f.name !== ".emptyFolderPlaceholder");
                        if (firstFile) {
                            const filePath = `${m.imagePath}/${firstFile.name}`;
                            const { data, error } = await supabaseAdmin.storage.from("memories").createSignedUrl(filePath, 60 * 15);
                            if (!error && data?.signedUrl) {
                                result.imageSrc = data.signedUrl;
                            }
                        }
                    } else if (!listError) {
                        // imagePath is likely a single file, not a folder - try to create signed URL directly
                        const { data, error } = await supabaseAdmin.storage.from("memories").createSignedUrl(m.imagePath, 60 * 15);
                        if (!error && data?.signedUrl) {
                            result.imageSrc = data.signedUrl;
                        }
                    }
                    if (!result.imageSrc) {
                        console.warn("Could not create signed URL for", m.imagePath);
                    }
                } catch (err) {
                    console.warn("Failed to create signed URL", err);
                }
            }
            // Handle imagePaths array (multiple images)
            if (m.imagePaths && Array.isArray(m.imagePaths) && m.imagePaths.length > 0) {
                try {
                    const signedUrls = await Promise.all(m.imagePaths.map(async (path)=>{
                        try {
                            const { data, error } = await supabaseAdmin.storage.from("memories").createSignedUrl(path, 60 * 15);
                            if (!error && data?.signedUrl) {
                                return data.signedUrl;
                            }
                            console.warn("Could not create signed URL for", path);
                            return null;
                        } catch (err) {
                            console.warn("Failed to create signed URL for", path, err);
                            return null;
                        }
                    }));
                    // Filter out any null values from failed URL generations
                    result.imageSignedUrls = signedUrls.filter((url)=>url !== null);
                } catch (err) {
                    console.warn("Failed to process imagePaths array", err);
                }
            }
            return result;
        }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(withUrls);
    }
    // No service role key available. Attempt a best-effort public URL fallback
    // (this will only work if your "memories" bucket is public). For private
    // buckets you should set SUPABASE_SERVICE_ROLE_KEY in your environment so
    // the server can generate signed URLs.
    const withFallback = memories.map((m)=>({
            ...m,
            imageSrc: m.imageUrl ?? (SUPABASE_URL && m.imagePath ? `${SUPABASE_URL}/storage/v1/object/public/memories/${encodeURIComponent(m.imagePath)}` : null)
        }));
    return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(withFallback);
}
async function POST(request) {
    try {
        const body = await request.json();
        const { title, date, location, description, imagePaths, userId } = body;
        const data = {
            title,
            location: location ?? null,
            description: description ?? null,
            imagePaths: imagePaths ?? [],
            userId: userId ?? null
        };
        console.log("REQ BODY:", body);
        // Memory model requires a DateTime `date`. Default to now if missing.
        data.date = date ? new Date(date) : new Date();
        const memory = await __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].memory.create({
            data
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(memory, {
            status: 201
        });
    } catch (err) {
        console.error("Failed to create memory:", err);
        // Return the actual error message so the client can show helpful info
        const message = err?.message ?? "Failed to create memory";
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__68f78c0c._.js.map