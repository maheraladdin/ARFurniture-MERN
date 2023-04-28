import Navigator from "../myComponents/home/navigator";
import {useState} from "react";
import HomeHeader from "../myComponents/home/homeHeader";
import Products from "../myComponents/home/products";
export default function WishList() {
	const [navigate, setNavigate] = useState("wishList");
	const [DATA, setDATA] = useState([]);

	return (
		<>
			{/* header */}
			<HomeHeader/>

			{/* products */}
			<Products DATA={DATA} />


			{/* navigator */}
			<Navigator setNavigate={setNavigate} navigate={navigate}/>
		</>
	);
}
