const API_URL = "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1/comments";

// статический GET
export async function GET() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error();

    const comments = await response.json();
    return Response.json(comments);
  } catch {
    return new Response(null, { status: 500 });
  }
}

// статический POST
export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) throw new Error("Failed to create new comment");
    const newComment = await response.json();

    return new Response(JSON.stringify(newComment), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch {
    return new Response(null, { status: 400 });
  }
}
