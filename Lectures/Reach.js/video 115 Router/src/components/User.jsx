import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	const params = useParams();
	return <div>Hey this is user {params.userName}.</div>;
};

export default User;
