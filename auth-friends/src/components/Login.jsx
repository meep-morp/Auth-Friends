import React, { useState } from "react";
import axios from "axios";


const Login = props => {
    const [loginValue, setLoginValue] = useState({
        username: "Lambda School",
        password: "i<3Lambd4"
    });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // const onChangeHandler = e => {
    //     setLoginValue({ ...loginValue, [e.target.name]: e.target.value })
    // }

    const login = e => {
        e.preventDefault();
        setIsLoading(true)
        axios.post(`http://localhost:5000/login`, loginValue)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                setIsLoading(false);
            })
            .catch(err => {
                setMessage("Invalid username or password")
                setIsLoading(false);
            })
    }

    return (
        <form onSubmit={login}>
            <h2>Welcome Back</h2>
            <div className="error">{message}</div>
            {isLoading
                ? <img className="loading" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2H7N4N4i8K9A0b1_file-ei-heart-svg-love-heart-outline-tattoo%2F&psig=AOvVaw1kzBjIflRnHcCV-Vm7bGOl&ust=1592408336697000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj56rzVhuoCFQAAAAAdAAAAABAa" alt="" />
                : ""}
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