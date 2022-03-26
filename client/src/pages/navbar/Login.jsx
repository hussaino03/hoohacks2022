import React from "react";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    let handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: pass,
            }),
        }).then(res => {
            console.log(res);
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
