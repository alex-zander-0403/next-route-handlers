import { comments } from "../mockData";

// динамический GET
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));

  return Response.json(comment);
}

// динамический PATCH
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

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
