import {StyleSheet, View, Text, TouchableOpacity,ImageBackground} from "react-native";
import RedHeart from "./red_heart";
import RedHeartFilled from "./red_heart_filled";
import AddCart from "../buttons/add_to_cart_button_home_page";
import { useState } from "react";

export default function Product({heartState,title,price,image}) {

	const [filled, setFilled] = useState(heartState);

	return (
		<ImageBackground
			source={{
			uri: !image ? `https://via.placeholder.com/250x250` : image
		}}
			resizeMode="cover"
			style={styles.product}
		>

			{/* Heart */}
			<View style={styles.redHeart}>
				<TouchableOpacity onPress={() => setFilled(!filled)}>
					{filled ? <RedHeartFilled/> : <RedHeart/>}
				</TouchableOpacity>
			</View>

			{/* Product Title and Price */}
			<View>
				<Text style={styles.productTitle}>
					{!title ? "Product Title" : title}
				</Text>
				<View style={styles.cartContainer}>
					<Text style={styles.productPrice}>{!price ? 50 : price}$</Text>
					<AddCart />
				</View>
			</View>

		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	product: {
		height: 250,
		margin: 10,
		borderRadius: 10,
		padding: 10,
		flex: 1,
		justifyContent: "space-between",
		overflow: "hidden",
	},
	redHeart: {
		alignItems: "flex-end",
	},
	cartContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	productTitle: {
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 10,
	},
	productPrice: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	}
});
