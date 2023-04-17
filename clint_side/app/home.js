import { StyleSheet, View,FlatList } from "react-native";
import All from "../myComponents/filter/active/all";
import Chair from "../myComponents/filter/light_mode/chair";
import Cupboard from "../myComponents/filter/light_mode/cupboard";
import Lamp from "../myComponents/filter/light_mode/lamp";
import LogTop from "../myComponents/home/logo_top";
import Search from "../myComponents/filter/light_mode/search";
import Homee from "../myComponents/navBar/home_icon_filled";
import WhiteHeart from "../myComponents/navBar/white_heart";
import Shopping from "../myComponents/navBar/shopping_cart";
import Avatar from "../myComponents/navBar/avatar";
import { Link } from "expo-router";
import Product from "../myComponents/home/products";
import {useEffect,useState} from "react";

export default function Home() {

	useEffect(() => {
		fetch("http://192.168.1.18:3000/api/products")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setDATA(data);
			})
			.catch((error) => console.log("error", error));
	},[])

	const [DATA, setDATA] = useState([]);

	const filters = [
		{
			id: 1,
			element: <All />
		},
		{
			id: 2,
			element: <Chair />
		},
		{
			id: 3,
			element: <Cupboard />
		},
		{
			id: 4,
			element: <Lamp />
		}
	]

	return (
		<>
			{/* header */}
			<View style={styles.logo}>
				<LogTop />
				<Search />
			</View>

			{/* filter */}
			<FlatList
				data={filters}
				renderItem={({item}) => item.element}
				horizontal
				ItemSeparatorComponent={() => <View style={{width: 10}} />}
				style={styles.flatList}
			/>


			{/* products */}
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Product image={item.imageURI} title={item.productName} price={item.productPrice} />}
				numColumns={2}
			/>

			<View
				style={{
					backgroundColor: "#518379",
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
					height: 50,
					margin: 10,
					borderRadius: 20,
				}}
			>
				{/* navigator */}
				<Homee />
				<Link href={"./likes"}>
					<WhiteHeart />
				</Link>
				<Link href={"./cart"}>
					<Shopping />
				</Link>
				<Link href={"./profile"}>
					<Avatar />
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	logo: {
		margin: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	flatList: {
		height: 90
	}
});
