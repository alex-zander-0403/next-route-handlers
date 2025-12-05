"use client";
import { useEffect, useState } from "react";

//
type Comment = {
  id: string;
  text: string;
};

//
export default function Home() {
  const [comments, setComments] = useState<Comment[]>([]);

  async function loadComments() {
    const res = await fetch("/comments");
    const data = await res.json();
    setComments(data);
  }

  useEffect(() => {
    loadComments();
  }, []);

  //
  return (
    <div className="flex justify-center items-center flex-col p-10 gap-5">
      <h1 className="text-center text-3xl font-medium">Домашняя страница</h1>
      <ul>
        {comments.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </div>
  );
}
