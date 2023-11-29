import './App.css';
import React, { useState, useEffect } from "react";
import Home from './pages/Home';
import Login from "./pages/Login";
import Shop from './pages/Shop';
import Navbar from './pages/Navbar';
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
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
      setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")));
    }
  }, []);
  
  return (
    <>
      <BrowserRouter>

        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
        <Routes>
          <Route exact path="/" element={<Home setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />

          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
