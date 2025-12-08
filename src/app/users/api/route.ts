// import { users } from "./mockUsersData";
import { NextRequest } from "next/server";

const API_URL = "https://jsonplaceholder.typicode.com/users";

type User = {
  id: number;
  name: string;
  username: string;
  address: object;
  phone: string;
  website: string;
  company: object;
};

//
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") || "";
  const limit = Number(searchParams.get("limit")) || 4;

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch");

    let users: User[] = await res.json();
    if (query) {
      users = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return Response.json(users.slice(0, limit));
  } catch {
    return Response.json([]);
  }
}
