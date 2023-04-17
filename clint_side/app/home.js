import { StyleSheet, View, ScrollView,FlatList } from "react-native";
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

export default function Home() {

	const DATA = Array(10).fill(0);

	return (
		<>
			<ScrollView>
				{/* header */}
				<View style={styles.logo}>
					<LogTop />
					<Search />
				</View>

				{/* filter */}
				<View style={styles.container}>
					<All />
					<Chair />
					<Cupboard />
					<Lamp />
				</View>

				{/* products */}
				<FlatList
					data={DATA}
					renderItem={({ item }) => <Product />}
					numColumns={2}
				/>

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
		margin: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	container: {
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
});
