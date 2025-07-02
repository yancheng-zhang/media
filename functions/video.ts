export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url)
  const videoPath = url.pathname

  // 读取视频文件
  const res = await fetch(`https://raw.githubusercontent.com/yancheng-zhang/media/main${videoPath}`)

  // 透传响应体和 Content-Type
  const headers = new Headers(res.headers)
  headers.set("cache-control", "public, max-age=31536000, immutable")
  return new Response(res.body, { headers })
}
