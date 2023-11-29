import React from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

const Navbar = (props) => {

    let navigate = useNavigate();
    const title = props.title;
    const logged = props.isLoggedIn ? "Yes" : "No";
    const admin = props.isAdmin ? "Yes" : "No";
    const cartEnabled = "nav-link" + (props.isLoggedIn ? " active" : " disabled");
    const dispatch = useDispatch();
    console.log(cartEnabled);

    const handleLogout = () =>{
            props.setIsLoggedIn(false);
            props.setIsAdmin(false);
            sessionStorage.clear();
            dispatch({type: "USER_LOGOUT"});
            let path = "/";
            navigate(path);

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary sticky-top" data-bs-theme="dark">
                <div className="container-fluid" style={{padding:"8px"}}>
                    <Link className="navbar-brand" style={{fontFamily:"Sora", fontSize:"20px", textAlign:"center"}} to={props.isLoggedIn ? "/shop" : "/"}>LNM Grocery and Fruit Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/shop">PRODUCTS</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={cartEnabled} to="/cart">CART</Link>
                            </li>
                        </ul>
                        <div>
                            <div className="nav-item mx-3">Logged In: {logged} Admin: {admin} 
                            {props.isLoggedIn ? <button className="btn btn-sbg btn-dark" onClick={handleLogout}>Log Out</button> : <button className="btn btn-bg btn-dark" onClick={handleLogout}>SIGN UP</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar