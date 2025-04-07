import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-evenly p-10">
      <Link
        href="/"
        className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer"
      >
        Home
      </Link>
      <Link
        href="/static-page"
        className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer"
      >
        Server Page
      </Link>
      <Link
        href="/interactive-page"
        className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer"
      >
        Client Page
      </Link>
    </div>
  );
}
