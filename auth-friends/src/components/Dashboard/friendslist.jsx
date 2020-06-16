import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
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

    const editPage = (id) => {
        
    }

    return (
        <>
            <h2>Your Friend's List</h2>
            <div className="friends">
                {friends.map(friend => {
                    return (
                        <div className="friend">
                            <p>{friend.name}</p>
                            <p>{friend.email}</p>
                            <p>{friend.age} years old</p>
                            <p
                                className="button"
                                onClick={() => deleteFriend(friend.id)}
                            >
                                X</p>
                            <p className="button">Edit</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FriendsList;