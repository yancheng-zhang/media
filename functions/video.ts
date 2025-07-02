export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const response = await fetch(request);
  if (url.pathname.startsWith("/video/")) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }
  return response;
};
