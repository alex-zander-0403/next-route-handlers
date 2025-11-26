import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-10 gap-5">
      <h1 className="text-center text-3xl font-medium">Домашняя страница</h1>
      <Link href="/hello" className="px-8 py-3 border border-amber-200">
        to hello
      </Link>

      <Link href="/profile" className="px-8 py-3 border border-amber-200">
        to profile
      </Link>
    </div>
  );
}
