import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-10 w-screen flex items-center justify-between p-4 bg-olive-400">
      <div className="flex items-center">
        <span className="ml-2 text-xl font-bold">Progressive React</span>
      </div>
      <ul className="flex items-center justify-end gap-4 px-40">
        <li className="hover:underline px-4 cursor-pointer text-lg">
          <Link href="/users">Users</Link>
        </li>
        <li className="hover:underline px-4 cursor-pointer text-lg">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}