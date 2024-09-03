import React from 'react'
import image from "../homebg.jpg"
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/login";
    navigate(path);
  }
  return (
    <>

      <div style={{ zIndex: "2", 
      position: "absolute", 
      top:"50%", 
      left:"50%", 
      width:"60%", 
      textAlign: "center", 
      transform: "translate(-50%, -50%)", 
      padding: "20px",
      backgroundColor: "rgb(0,0,0, 0.5",
      color:"white",
      fontSize:"24px"}}>
        <h1 style={{fontFamily:"Sora"}}><b>LNM Grocery and Fruits Shop</b></h1> <br/>
        <p className='fw-light' style={{fontSize:"18px"}}>A website for campus grocery and fruit shop to allow students and campus residents to place orders online and pick them up later</p>
        <div className='d-flex justify-content-around' style={{padding:"10px"}}>
          <button className="btn btn-lg btn-success rounded-pill" onClick={handleClick}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Home