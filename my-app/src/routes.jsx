// src/routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/user/Home";


export default function AppRoutes() {
  return (
    
      <Routes>
        {/* Admin */}
        <Route 
  path="/admin/dashboard" 
  element={
    <>
      {console.log("Rendering Dashboard")}
      <Dashboard />
    </>
  } 
/>

        {/* User */}
        <Route path="/user/home" element={<Home />} />
        

        
      </Routes>
    
  );
}
