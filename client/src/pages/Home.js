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
        <h1><b>GFC App </b></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nulla sequi laudantium rem ducimus magni unde reiciendis. Vel, impedit aliquam, molestiae dolorem quae hic commodi perferendis accusantium cumque perspiciatis odit!</p>
        <div className='d-flex justify-content-around' style={{padding:"10px"}}>
          <button className="btn btn-lg btn-primary" onClick={handleClick}>Login</button>
          <button className="btn btn-lg btn-primary">Register</button>
        </div>
      </div>

      <div style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "blur(6px)",
        zIndex: "-1"
      }}>


      </div>
    </>
  )
}

export default Home