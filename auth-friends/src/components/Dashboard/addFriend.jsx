import React, { useState, useContext } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { FriendsContext } from "../contexts/friendsContext";


const AddFriends = props => {
    const [friends, setFriends] = useContext(FriendsContext);
    const [values, setValues] = useState("");

    const changeHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const create = e => {
        e.preventDefault()
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, values)
            .then(res => {
                console.log(res)
                setFriends(res.data);
                useHistory.push("/friends")
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <form onSubmit={create}>
            <input type="text"
                onChange={changeHandler}
                name="name"
                placeholder="Name"
            />
            <input type="text"
                onChange={changeHandler}
                name="age"
                placeholder="Age"
            />
            <input type="text"
                onChange={changeHandler}
                name="email"
                placeholder="Email"
            />
            <button type="submit" className="button">Add</button>
        </form>
    )
}

export default AddFriends