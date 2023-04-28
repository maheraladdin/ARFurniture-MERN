import Navigator from "../myComponents/home/navigator";
import {useState} from "react";
import HomeHeader from "../myComponents/home/homeHeader";
import Products from "../myComponents/home/products";

export default function Carts() {
	const [navigate, setNavigate] = useState("cart");
	const [DATA, setDATA] = useState([]);


	return (
		<>
			{/* header */}
			<HomeHeader/>

			{/*{}*/}
			<Products DATA={DATA}/>

			{/* navigator */}
			<Navigator setNavigate={setNavigate} navigate={navigate}/>
		</>
	);
}
