import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import './about.css';



const Login = () =>  {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const nav = useNavigate();


    const renderErrorMessage = (data) =>{
      setErrorMessages(data);
    return  (
      <div className="error">{data.message}</div>
    );}


    const handleSignup = (e) => {
      e.preventDefault();
      if (pass == passConfirm) {
        fetch("http://localhost:4000/users/signup", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: pass,
          }),
        })
          .then((res) => {
            res
              .json()
              .then((results) => {
                if (results["msg"] == "success") {
                  // SUCCESSFUL REGISTER
                  console.log(results);
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
                              "userID=" +
                              results["data"]["userID"] +
                              "; path=/;";
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
                } else {
                  // SOMETHING HAPPENED
                  console.log(results);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        ReactDOM.render(
          renderErrorMessage({ message: "passwords don't match" }),
          document.getElementById("error")
        );
      }
    };

    return (
      <div class="row py-5 d-flex align-items-center justify-content-center">
        <header className='masthead'>
          <h1 className='masthead-heading'>GrowWithMe</h1>
        </header>

        <div class="py-5 d-flex align-items-center justify-content-center">
          <form onSubmit={handleSignup}>
            <div class="form-outline mb-4">
              <label class="form-label" for="email">
                Your email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control form-control-lg"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="username">
                Your username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                class="form-control form-control-lg"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="password">
                Create a password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control form-control-lg"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="password_check">
                Confirm your password
              </label>
              <input
                type="password"
                name="password"
                id="password_check"
                class="form-control form-control-lg"
                onChange={(e) => setPassConfirm(e.target.value)}
                required
              />
            </div>

            <div id="error"></div>

            <p class="text-center text-muted mt-5 mb-3">
              Already have an account?
              <a href="/login" class="fw-bold text-body">
                <u>Login here.</u>
              </a>
            </p>

            <div class="col text-center">
              <button type="submit" class="btn btn-primary btn-block btn-lg">
                <span>Create Account</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;
