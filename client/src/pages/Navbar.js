import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Navbar = (props) => {

    let navigate = useNavigate();
    const logged = props.isLoggedIn ? "Yes" : "No";
    const admin = props.isAdmin ? "Yes" : "No";
    const cartEnabled = "nav-link" + (props.isLoggedIn ? " active" : " disabled");
    const dispatch = useDispatch();
    console.log(cartEnabled);
    const view = props.view;

    const handleLogout = () => {
        props.setIsLoggedIn(false);
        props.setIsAdmin(false);
        sessionStorage.clear();
        dispatch({ type: "USER_LOGOUT" });
        let path = "/";
        navigate(path);

    }

    const handleSignIn = () => {
        let path = "/login";
        navigate(path);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary sticky-top" data-bs-theme="dark">
                <div className="container-fluid" style={{ padding: "8px" }}>
                    <Link className="navbar-brand" style={{ fontFamily: "Sora", fontSize: "20px", textAlign: "center" }} to={props.isLoggedIn ? "/shop" : "/"}>LNM Grocery and Fruit Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {props.isLoggedIn && (<li className="nav-item mx-3">
                                <Link className="nav-link active" to="/orders">Orders</Link>
                            </li>)}
                            <li className="nav-item mx-3" style={view==="all" ? {color:"green"}:{}}>
                                <Link className="nav-link active" aria-current="page" to="/shop" >All Products</Link>
                            </li>
                            <li className="nav-item mx-3" style={view==="bakery" ? {color:"green"}:{}}>
                                <Link className="nav-link active" to="/shop/bakery">Bakery</Link>
                            </li>
                            <li className="nav-item mx-3" style={view==="fruits" ? {color:"green"}:{}}>
                                <Link className="nav-link active" to="/shop/fruits">Fruits</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/shop/snacks">Snacks</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/shop/beverages">Beverages</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/shop/personal">Personal Care</Link>
                            </li>

                        </ul>
                        <div>
                            <div className="nav-item mx-3 d-flex justify-content-center">
                                <div className="p-2">Logged In: {logged} Admin: {admin}</div>
                                <div className="p-2">{props.isLoggedIn ? <button className="btn btn-sbg btn-dark" onClick={handleLogout}>Log Out</button> : <button className="btn btn-bg btn-dark" onClick={handleSignIn}>SIGN UP</button>}</div>
                                <div className="p-2">
                                    <Link className="nav-link active" to="/cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6" width="30px">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar