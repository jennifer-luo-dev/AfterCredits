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
"[project]/personalprojects/AfterCredits/aftercredits/src/app/api/memory/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personalprojects/AfterCredits/aftercredits/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const parsedId = Number(id);
        const body = await request.json();
        const { title, date, location, description, imagePaths } = body;
        const data = {
            title,
            location: location ?? null,
            description: description ?? null,
            imagePaths: imagePaths ?? []
        };
        if (date) data.date = new Date(date);
        const memory = await __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].memory.update({
            where: {
                id: parsedId
            },
            data: data
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(memory);
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update memory"
        }, {
            status: 500
        });
    }
}
async function GET(request, { params }) {
    try {
        const { id } = await params;
        const parsedId = Number(id);
        const memory = await __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].memory.findUnique({
            where: {
                id: parsedId
            }
        });
        if (!memory) return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not found"
        }, {
            status: 404
        });
        // If service role key present, generate signed URLs
        const SUPABASE_URL = ("TURBOPACK compile-time value", "https://jkjweynermbppxrllqfn.supabase.co");
        const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
            try {
                const { createClient } = await __turbopack_context__.A("[project]/personalprojects/AfterCredits/aftercredits/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript, async loader)");
                const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
                const result = {
                    ...memory
                };
                // Handle imagePaths array (multiple images)
                if (memory.imagePaths && Array.isArray(memory.imagePaths) && memory.imagePaths.length > 0) {
                    const signedUrls = await Promise.all(memory.imagePaths.map(async (path)=>{
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
                    result.imageSignedUrls = signedUrls.filter((url)=>url !== null);
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
            } catch (err) {
                console.warn("Failed to create signed URLs", err);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(memory);
    } catch (err) {
        console.error(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$personalprojects$2f$AfterCredits$2f$aftercredits$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to load memory"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8faf91fd._.js.map