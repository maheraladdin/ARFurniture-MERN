import { StyleSheet, View, Text } from "react-native";
import BackBtn from "../myComponents/buttons/back_button";
import RedHeart from "../myComponents/home/red_heart_filled";
import AddCart from "../myComponents/buttons/add_to_cart_button_product_page";
import ArViewer from "../myComponents/buttons/ar_viewer";

export default function Products() {
	return (
		<View>
				<BackBtn />
			<View style={{ alignItems: "flex-end", margin: 20 }}>
				<RedHeart />
			</View>
			<Text style={{ marginTop: 500, padding: 10 }}>AwesomeChair</Text>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
					gap: 150,
				}}
			>
				<Text>50$</Text>
				<View style={{ flexDirection: "row", gap: 10 }}>
					<ArViewer />
					<AddCart />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
