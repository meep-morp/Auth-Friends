import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import { FriendsProvider } from "./contexts/friendsContext";
import Nav from "./Nav";
import Login from "./login-signup/Login";
import Signup from "./login-signup/SignUp";
import FriendsList from "./Dashboard/friendslist";
import DashNav from "./Dashboard/DashNav";
import AddFriends from "./Dashboard/addFriend";

function App() {
	return (
		<FriendsProvider>
			<div className="App">
				<Nav />
				<div className="content">
					<Router>
						<Route path="/" exact>
							<Login />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<PrivateRoute path="/friends">
							<DashNav />
							<FriendsList />
						</PrivateRoute>
						<PrivateRoute path="/add">
							<DashNav />
							<h1>Add New Friend</h1>
							<AddFriends />
						</PrivateRoute>
					</Router>
				</div>
			</div>
		</FriendsProvider>
	);
}

export default App;
