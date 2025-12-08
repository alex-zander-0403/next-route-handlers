// получение request headers с помощью NextRequest
// import { type NextRequest } from "next/server";

// //
// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization")); // bearer 123qwerty123

//   return new Response("Данные пользователя (route)");
// }

// ==============================================

// получение request headers с помощью headers
// import { headers } from "next/headers";

// //
// export async function GET() {
//   const headerList = await headers();
//   console.log(headerList.get("Authorization")); // bearer 123qwerty123

//   return new Response("Данные пользователя (route)");
// }

// ==============================================

// настраиваем response headers для получения ответа в html формате
// import { headers } from "next/headers";

// //
// export async function GET() {
//   const headerList = await headers();
//   console.log(headerList.get("Authorization")); // bearer 123qwerty123

//   return new Response("<h1>Данные пользователя (route)</h1>", {
//     headers: { "Content-Type": "text/html; charset=utf-8" },
//   });
// }

// ==============================================

// настройка ответа в зависимости от request headers (+ к мобилкам)
import { headers } from "next/headers";

export async function GET() {
  const headerList = headers();
  const acceptHeader = (await headerList).get("Accept");

  const userData = {
    name: "Alex",
    email: "111@111",
    role: "admin",
  };

  // определяем формат ответа
  // если в заголовке "Accept" есть "application/json"
  // возвращаем json
  if (acceptHeader?.includes("application/json")) {
    return new Response(JSON.stringify(userData), {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
  } else {
    // если нет
    // возвращаем html
    return new Response(
      `<h1>Профиль пользователя:</h1>
      <ul>
        <li>${userData.name}</li>
        <li>${userData.email}</li>
        <li>${userData.role}</li>
      </ul>
      `,
      {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
}
