"use client";
import React, { useEffect, useState } from "react";

//
type Comment = {
  id: string;
  text: string;
};

//
export default function Home() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  // FN загрузка всех комментариев
  async function loadComments() {
    // обращение к статическому ендпоинту get в comments -> route.ts
    const res = await fetch("/comments");
    const data = await res.json();
    setComments(data);
  }

  // FN добавление комментария
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // обращение к статическому ендпоинту post в comments -> route.ts
    const res = await fetch("/comments", {
      method: "POST",
      body: JSON.stringify({ text: newCommentText }),
    });

    if (res.ok) {
      setNewCommentText("");
    }
  }

  // FN редактирование комментария
  async function handleUpdate(id: string) {
    // обращение к динамическому ендпоинту PATCH в comments -> route.ts
    const res = await fetch(`/comments/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ text: editText }),
    });

    if (res.ok) {
      setEditingId(null);
      loadComments();
    }
  }

  //
  useEffect(() => {
    loadComments();
  }, []);

  //
  return (
    <div className="flex justify-center items-center flex-col p-10 gap-5">
      <h1 className="text-center text-3xl font-medium">Домашняя страница</h1>

      <div className="flex flex-col items-center p-5 gap-3 rounded bg-gray-600">
        <h2>Добавить комментарий</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="введите текст"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            required
            className="px-3 py-2 rounded bg-gray-500"
          />

          <button type="submit" className="p-3 rounded text-black bg-green-300">
            Добавить
          </button>
        </form>
      </div>

      <ul className="flex flex-col p-5 gap-3 rounded bg-gray-600">
        {comments.map((comment) => (
          <li key={comment.id} className="px-10 py-3 rounded bg-gray-800">
            {editingId === comment.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="px-3 py-2 mr-5 rounded bg-gray-500"
                />

                <button onClick={() => handleUpdate(comment.id)}>
                  Сохранить
                </button>
              </div>
            ) : (
              <div>
                <span>{comment.text}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditText(comment.text);
                    }}
                    className="p-1 rounded text-black bg-blue-800"
                  >
                    Редактировать
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
