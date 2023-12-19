import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'; // Sesuaikan dengan jalur file yang benar
import About from "./pages/about";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Setting from "./pages/setting";
import Register from "./pages/register";
import Pencatatan from "./pages/pencatatan";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pencatatan" element={<Pencatatan />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  ); 
} 
 
export default App;