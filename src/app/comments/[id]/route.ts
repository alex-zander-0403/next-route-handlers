const API_URL = "https://68671e3ae3fefb261eddbed3.mockapi.io/api/v1/comments";

// динамический GET
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error();

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

    if (!res.ok) throw new Error();

    //
  } catch {
    return new Response(null, { status: 404 });
  }

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
}

// динамический DELETE
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  const deletedComment = comments[index];

  comments.splice(index, 1);

  return Response.json(deletedComment);
}
