export default function Navbar() {
  return (
    <div className="flex justify-evenly p-10">
      <button className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer">
        Home
      </button>
      <button className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer">
        Server Page
      </button>
      <button className="border-2 border-slate-300 rounded-xl p-2 cursor-pointer">
        Client Page
      </button>
    </div>
  );
}
