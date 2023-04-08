import { StyleSheet, View, Text, ScrollView } from "react-native";
import LogTop from "../myComponents/buttons/back_button";
import Confirm from "../myComponents/buttons/confirm_button";
import Card from "../myComponents/payment/card";
import Paypal from "../myComponents/payment/paypal";
import { Link } from "expo-router";

export default function Carts() {
	return (
		<View style={{ marginTop: 40 }}>
			<ScrollView>
				<View style={styles.logo}>
					<LogTop />
					<Text>Shopping cart</Text>
				</View>
				<View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
					<Card />
					<Paypal />
				</View>
				<View style={{ marginTop: 400 }}>
					<View style={{ alignItems: "center", marginTop: 15 }}>
						<View
							style={{
								backgroundColor: "#518379",
								flexDirection: "row",
								justifyContent: "space-evenly",
								alignItems: "center",
								height: 48,
								width: 295,
								borderRadius: 30,
								gap: 150,
							}}
						>
							<Text style={{ color: "#f9f8fa" }}>TOTAL</Text>
							<Text style={{ color: "#f9f8fa" }}>100$</Text>
						</View>
					</View>
					<View style={{ alignItems: "center", marginTop: 20 }}>
						<Link href={"./profile"}>
							<Confirm />
						</Link>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		margin: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	container: {
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	product: {
		backgroundColor: "#518379",
		width: "45%",
		height: 250,
		margin: 10,
		borderRadius: 20,
	},
});
