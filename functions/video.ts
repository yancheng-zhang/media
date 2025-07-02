export const onRequest: PagesFunction = async (context) => {
    const { pathname } = new URL(context.request.url)
    if (
        pathname.endsWith(".mp4") ||
        pathname.endsWith(".webm") ||
        pathname.endsWith(".mov")
    ) {
        const res = await context.next()
        const headers = new Headers(res.headers)
        headers.set("cache-control", "public, max-age=31536000, immutable")
        return new Response(res.body, { ...res, headers })
    }
    return await context.next()
}
