"use client";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  address: object;
  phone: string;
  website: string;
  company: object;
}

//
export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`/users/api?query=${search}`)
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch(() => {
        setUsers([]);
        console.log("catch");
      });
  }, [search]);

  return (
    <div className="flex items-center flex-col gap-5">
      <div className="p-5 m-5 rounded bg-zinc-400">
        <p className="text-xl text-gray-700">
          🧐 На этой странице (/users) реализован поиск с помощью динамического
          инпута отправляющего GET запросы с query параметрами
          (`/users/api?query=search`) на route handler (./users/api/route.ts)
        </p>
        <p className="text-xl text-gray-700">
          Который делает fetch GET по адресу
          &quot;https://jsonplaceholder.typicode.com/users&quot; и при наличии
          query фильтрует ответ на бэке
        </p>
      </div>

      <h2>Пользователи</h2>
      <input
        type="text"
        placeholder="введите имя"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 rounded bg-gray-900"
      />
      {users ? (
        <ul>
          {users.map((user: User) => (
            <li key={user.id} className="px-10 py-2 mb-1 rounded bg-gray-600">
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет пользователей</p>
      )}
    </div>
  );
}
