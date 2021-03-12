import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<img src="https://i.ibb.co/Jv4BMXS/logo-icon-black-name-black.png" />
		</div>
	);
};
