import React from "react";

const DashNav = props => {
    return (
        <nav className="dash">
            <a href="/add">Add Friend</a>
            <a href="/friends">Friends List</a>
            <div className="signout">
                <a classname="signout" href="/">Sign Out</a>
            </div>
        </nav>
    )
}

export default DashNav