const API_URL = "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1/comments";

// динамический GET
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) throw new Error("Failed to fetch comments");
    const comment = await res.json();

    return Response.json(comment);
  } catch {
    return new Response(null, { status: 404 });
  }
}

// динамический PATCH
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) throw new Error("Updating failed");
    return Response.json(await res.json());
  } catch {
    return Response.json(null, { status: 400 });
  }
}

// динамический DELETE
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!res.ok) throw new Error("Deleting failed");
    // const comment = await res.json();

    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 400 });
  }
}
