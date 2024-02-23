/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Navbar />
					<Home />
				</>
			),
		},
		{
			path: "/about",
			element: (
				<>
					<Navbar />
					<About />
				</>
			),
		},
		{
			path: "/login",
			element: (
				<>
					<Navbar />
					<Login />
				</>
			),
		},
		{
			path: "/user/:userName",
			element: (
				<>
					<Navbar />
					<User />
				</>
			),
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
