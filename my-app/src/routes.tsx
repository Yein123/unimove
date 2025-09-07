// src/routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/user/Home";
import Queue from "./pages/user/Queue";
import Tracking from "./pages/user/Tracking";
import Cancel from "./pages/user/Cancel";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* User */}
        <Route path="/user/home" element={<Home />} />
        <Route path="/user/queue" element={<Queue />} />
        <Route path="/user/tracking" element={<Tracking />} />
        <Route path="/user/cancel" element={<Cancel />} />

        {/* Default */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
