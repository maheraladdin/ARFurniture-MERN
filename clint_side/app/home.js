import { StyleSheet, View, ScrollView } from "react-native";
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
import Product from "./products";

export default function Home() {
	return (
		<>
			<ScrollView>
				<View style={styles.logo}>
					<LogTop />
					<Search />
				</View>
				<View style={styles.container}>
					<All />
					<Chair />
					<Cupboard />
					<Lamp />
				</View>

				<View style={{ flexDirection: "row" }}>
					<Product />
					<Product />
				</View>

				<View style={{ flexDirection: "row" }}>
					<Product />
					<Product />
				</View>

				<View style={{ flexDirection: "row" }}>
					<Product />
					<Product />
				</View>

				<View style={{ flexDirection: "row" }}>
					<Product />
					<Product />
				</View>

				<View style={{ flexDirection: "row" }}>
					<Product />
					<Product />
				</View>
			</ScrollView>

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
		margin: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	container: {
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
});
