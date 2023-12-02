import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     );
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Error = styled.span`
//   color: red;
// `;

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  console.log(currentUser);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }).then((response) => {
      if (response != null) {
        console.log("hello2");
        var now = new Date().getTime();
        sessionStorage.setItem('setupTime', now)
        sessionStorage.setItem("isAdmin", response.user.isAdmin);
        setIsAdmin(response.user.isAdmin);
        sessionStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        let path = "/shop";
        navigate(path);
      };
    });
  };
  return (
    <>
      {/* <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container> */}
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://i.pinimg.com/originals/05/db/7f/05db7f9d5e29a91c0d4d926025da6ba5.jpg"
                      alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem;" }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6" width="30px">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>

                          
                          <span className="h1 fw-bold mb-0"> Grocery And Fruit Shop</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                          <label className="form-label" for="form2Example17">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                          <label className="form-label" for="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleClick} disabled={isFetching}>Login</button>
                        </div>
                        {error && <span style={{ color: "red" }}>Incorrect Username or Password</span>}
                        <div>
                          <a className="small text-muted" href="#!"><br /></a>
                          <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <Link to="/register"
                            style={{ color: "#393f81" }}>Register here</Link></p>
                          <a href="#!" className="small text-muted">Terms of use.</a>
                          <a href="#!" className="small text-muted">Privacy policy</a>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;