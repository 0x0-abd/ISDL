import './App.css';
import React, { useState, useEffect } from "react";
import Home from './pages/Home';
import Login from "./pages/Login";
import Shop from './pages/Shop';
import Navbar from './pages/Navbar';
import Cart from './pages/Cart';
import Register from "./pages/Register"
import Orders from './pages/Orders';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  let className = "page-container";
  if (!isLoggedIn) {
    className += " logged-out-screen";
  }
  useEffect(() => {
    console.log("hello");
    var hours = 0.5; // to clear the localStorage after 1 hour
    // (if someone want to clear after 8hrs simply change hours=8)
    var now = new Date().getTime();
    var setupTime = sessionStorage.getItem('setupTime');
    if (setupTime == null) {
      sessionStorage.setItem('setupTime', now);
      console.log(setupTime);
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        sessionStorage.clear()
        sessionStorage.setItem('setupTime', now);
      }
    }
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
      setIsAdmin(JSON.parse(sessionStorage.getItem("isAdmin")));
    }
  }, []);
  
  return (
    <>
      <BrowserRouter>

        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
        <Routes>
          <Route exact path="/" element={<Home setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />

          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/register" element={<Register />} />

          <Route exact path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />

          <Route exact path="/cart" element={<Cart setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />

          <Route exact path="/orders" element={isLoggedIn ? <Orders /> : <Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
