import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FriendsContext } from "../contexts/friendsContext";

const FriendsList = props => {
    const [friends, setFriends] = useContext(FriendsContext);

    useEffect(() => {
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends`)
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const deleteFriend = (id) => {
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="friends">
            <h2>Your Friend's List</h2>
            {friends.map(friend => {
                return (
                    <div className="friend">
                        <p>{friend.name}</p>
                        <p>{friend.email}</p>
                        <p>{friend.age}</p>
                        <p onClick={() => deleteFriend(friend.id)}>X</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList;