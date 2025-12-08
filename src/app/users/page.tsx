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
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch(`/users/api?query=${search}&limit=${limit}`)
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch(() => {
        setUsers([]);
        console.log("catch");
      });
  }, [search, limit]);

  return (
    <div className="flex items-center flex-col gap-5">
      <div className="flex flex-col gap-5 p-5 m-5 rounded bg-zinc-700">
        <p className="p-3 text-xl rounded text-gray-700 bg-gray-400">
          🧐 На этой странице (/users) реализован поиск с помощью динамического
          инпута отправляющего GET запросы с query параметрами
          (`/users/api?query=search`) на route handler (./users/api/route.ts)
        </p>
        <p className="p-3 text-xl rounded text-gray-700 bg-gray-400">
          Который делает fetch GET по адресу
          &quot;https://jsonplaceholder.typicode.com/users&quot; и при наличии
          query фильтрует ответ на бэке
        </p>
        <p className="p-3 text-xl rounded text-gray-700 bg-gray-400">
          Вторым инпутом передается второй query параметр для настройки
          количества одновременно отображающихся пользователей
        </p>
      </div>

      <h2 className="text-3xl">Пользователи</h2>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="введите имя"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded bg-gray-900"
        />
        <input
          type="number"
          placeholder="пагинация"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="p-3 rounded bg-gray-900"
        />
      </div>

      {users ? (
        <ul>
          {users.map((user: User) => (
            <li key={user.id} className="px-10 py-2 mb-1 rounded bg-gray-600">
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Пользователи не найдены!</p>
      )}
    </div>
  );
}
