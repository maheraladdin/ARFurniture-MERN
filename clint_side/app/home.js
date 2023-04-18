import HomeHeader from "../myComponents/home/homeHeader";
import HomeFilter from "../myComponents/home/HomeFilter";
import Products from "../myComponents/home/products";
import Navigator from "../myComponents/home/navigator";

export default function Home() {

	return (
		<>
			{/* header */}
			<HomeHeader />

			{/* filter */}
			<HomeFilter />


			{/* products */}
			<Products />

			{/* navigator */}
			<Navigator />
		</>
	);
}
