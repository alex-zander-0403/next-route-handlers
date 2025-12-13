import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {

  // доступ к запросу
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token");

  // редирект или модификация
  if (path === "/admin" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // продолжить обработку
  return NextResponse.next();
}
