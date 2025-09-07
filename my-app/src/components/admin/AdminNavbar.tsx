// src/components/admin/AdminNavbar.jsx
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-teal-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">UniMove</h1>
      <ul className="flex gap-6">
        <li><Link to="/admin/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="/admin/fleet" className="hover:text-gray-300">Fleet Management</Link></li>
        <li><Link to="/admin/live" className="bg-yellow-400 text-black px-3 py-1 rounded-lg">Live Tracking</Link></li>
      </ul>
    </nav>
  );
}
