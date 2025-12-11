import { cookies } from "next/headers";

//
export async function GET() {
  const cookieStore = cookies();
  const theme = (await cookieStore).get("theme")?.value || "light";

  return Response.json({ theme });
}

//
export async function POST(request: Request) {
  const cookieStore = cookies();
  const { theme } = await request.json();
  (await cookieStore).set("theme", theme);

  return Response.json({ theme });
}
