// src/components/user/UserNavbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-teal-900 text-white px-4 py-3 flex justify-between items-center relative">
      <h1 className="text-lg font-bold">UniMove</h1>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`absolute md:static top-12 right-0 bg-teal-800 w-40 md:flex md:gap-4 ${open ? "block" : "hidden"}`}>
        <li><Link to="/user/home" className="block px-4 py-2 hover:bg-teal-700">Home</Link></li>
        <li><Link to="/user/queue" className="block px-4 py-2 hover:bg-teal-700">Queue</Link></li>
        <li><Link to="/user/tracking" className="block px-4 py-2 hover:bg-teal-700">Tracking</Link></li>
      </ul>
    </nav>
  );
}
