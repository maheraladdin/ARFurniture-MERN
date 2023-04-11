import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import RedHeart from "./home/red_heart";
import RedHeartFilled from "./home/red_heart_filled";
import AddCart from "./buttons/add_to_cart_button_home_page";
import { useState } from "react";

export default function Products() {

	const [filled, setFilled] = useState(false);

	return (
		<View style={styles.product}>
			<View style={styles.redHeart}>
				<TouchableOpacity onPress={() => setFilled(!filled)}>
					{filled ? <RedHeartFilled/> : <RedHeart/>}
				</TouchableOpacity>
			</View>
			<View>
				<Text style={styles.productTitle}>
					Awesome chair
				</Text>
				<View style={styles.cartContainer}>
					<Text style={styles.productPrice}>50$</Text>
					<AddCart />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	product: {
		backgroundColor: "#518379",
		width: "45%",
		height: 250,
		margin: 10,
		borderRadius: 10,
		padding: 10,
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	redHeart: {
		alignItems: "flex-end",
	},
	cartContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
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
