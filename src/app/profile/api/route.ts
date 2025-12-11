import { type NextRequest } from "next/server";

//
export async function GET(request: NextRequest) {
  const theme = request.cookies.get("theme") || "light";

  return new Response(`Цветовая тема: ${theme}`, {
    headers: {
      "Set-Cookie": `theme=dark`,
      "Content-Type": "text/plane",
    },
  });
}
