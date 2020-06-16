import React from "react";
import { createContext, useState } from "react";


export const FriendsContext = createContext();

export const FriendsProvider = props => {
    const [friends, setFriends] = useState([]);

    return (
        <FriendsContext.Provider
            value={[friends, setFriends]}
        >
            {props.children}
        </FriendsContext.Provider>
    )
}
