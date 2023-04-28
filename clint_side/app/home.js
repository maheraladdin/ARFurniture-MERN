import HomeHeader from "../myComponents/home/homeHeader";
import HomeFilter from "../myComponents/home/HomeFilter";
import Products from "../myComponents/home/products";
import Navigator from "../myComponents/home/navigator";
import { useState } from "react";

export default function Home() {

	// products data
	const [DATA, setDATA] = useState([]);
	const [navigate, setNavigate] = useState("home");


	return (
		<>
			{/* header */}
			<HomeHeader/>

			{/* filter */}
			<HomeFilter setDATA={setDATA}/>


			{/* products */}
			<Products DATA={DATA} />

			{/* navigator */}
			<Navigator setNavigate={setNavigate} navigate={navigate}/>
		</>
	);
}
