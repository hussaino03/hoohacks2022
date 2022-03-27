import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const nav = useNavigate();

    let handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/users/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: pass,
            }),
        }).then(res => {
            res.json().then( results => {
                if (results['msg'] == 'success') {
                    // SUCCESSFUL LOGIN
                    console.log(results);
                    document.cookie = "userID="+results['data']['userID']+"; path=/;";
                    nav("/");
                } else {
                    // USERNAME OR PASSWORD INCORRECT
                    console.log(results['msg']);
                }
            }
            ).catch( err =>
                { console.log(err); }
            );
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input name="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
