// import { users } from "./mockUsersData";
import { NextRequest } from "next/server";

//
const API_URL = "https://jsonplaceholder.typicode.com/users";

// user
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },

type User = {
  id: number;
  name: string;
  username: string;
  address: object;
  phone: string;
  website: string;
  company: object;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") || "";

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch");

    let users: User[] = await res.json();
    if (query) {
      users = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return Response.json(users);
  } catch {
    return Response.json([]);
  }
}
