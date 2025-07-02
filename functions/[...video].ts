export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)
  // 获取 video 后面的所有路径
  const path = url.pathname.replace(/^\/video/, "/video")
  const githubUrl = `https://raw.githubusercontent.com/yancheng-zhang/media/main${path}`
  const res = await fetch(githubUrl)
  const headers = new Headers(res.headers)
  headers.set("cache-control", "public, max-age=31536000, immutable")
  return new Response(res.body, { headers })
}
