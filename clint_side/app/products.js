import { StyleSheet, View, Text } from "react-native";
import RedHeart from "../myComponents/home/red_heart";
import AddCart from "../myComponents/buttons/add_to_cart_button_home_page";

export default function Products() {
	return (
		<View style={styles.product}>
			<View style={{ alignItems: "flex-end", margin: 10 }}>
				<RedHeart />
			</View>
			<Text style={{ marginTop: 130, color: "white", padding: 10 }}>
				Awesome chair
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
					gap: 50,
				}}
			>
				<Text style={{ color: "white" }}>50$</Text>
				<AddCart />
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
		borderRadius: 20,
	},
});
