import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";


const Login = props => {
    const [loginValue, setLoginValue] = useState({
        username: "Lambda School",
        password: "i<3Lambd4"
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { push } = useHistory();

    const login = e => {
        e.preventDefault();
        setIsLoading(true)
        axiosWithAuth()
            .post(`http://localhost:5000/api/login`, loginValue)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                setIsLoading(false);
                push('/friends')
            })
            .catch(err => {
                console.log(err);
                setMessage("Invalid Credentials")
                setIsLoading(false);
            })
    }

    return (
        <form onSubmit={login}>
            <h2>Welcome Back</h2>
            <div className="error">{message}</div>
            <input type="text"
                name="username"
                value="Lambda School"
            />
            <input type="password"
                name="password"
                value="i<3Lambd4"
            />
            <button className="button" onClick={login}>Login</button>
        </form>
    )
}

export default Login