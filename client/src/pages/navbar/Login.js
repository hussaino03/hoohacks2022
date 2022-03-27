import React,  { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import './about.css';


const Login = () =>  {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const nav = useNavigate();


    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    const handleLogin = (e) => {
      e.preventDefault();
      fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: pass,
        }),
      })
        .then((res) => {
          res
            .json()
            .then((results) => {
              if (results["msg"] == "success") {
                // SUCCESSFUL LOGIN
                console.log(results);
                document.cookie =
                  "userID=" + results["data"]["userID"] + "; path=/;";
                nav("/");
              } else {
                // USERNAME OR PASSWORD INCORRECT
                console.log(results["msg"]);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
        <div>
              <header className='masthead'>
    <h1 className='masthead-heading'>GrowWithMe</h1>
  </header>
  <div class="row py-5 d-flex align-items-center justify-content-center">
          <h1 class="text-center fs-2">Welcome Back!</h1>
          </div>
        <div class="row justify-content-center">
        <div class="col-4">
          <form onSubmit={handleLogin}>
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="username"
                class="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
    </div>
    <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <footer
          className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 mx-4 border-top border-bottom"
        >
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Hoohacks 2022</p>



          <ul className="nav col-md-4 justify-content-end" id="fadeshow">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">Home</a>
            </li>
            <li className="nav-item">
              <a href="/plants" className="nav-link px-2 text-muted">
                User
              </a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link px-2 text-muted">Events</a>
            </li>
            <li className="nav-item">
              <a href="/Signup" className="nav-link px-2 text-muted">SignUp</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link px-2 active">Login</a>
            </li>
          </ul>
        </footer>
    </div>
    );
}

export default Login;
