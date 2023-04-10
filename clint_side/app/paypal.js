import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import Confirm from "../myComponents/buttons/confirm_button";
import Card from "../myComponents/payment/card_light";
import Paypal from "../myComponents/payment/paypal";
import { Link } from "expo-router";

export default function paypal() {
	return (
		<View style={{ marginTop: 40 }}>
			<View style={styles.logo}>
				<Back />
				<Text style={{ fontSize: 20 }}>Shopping cart</Text>
			</View>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: 100,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 5,
					}}
				>
					<View
						style={{
							width: 20,
							height: 20,
							borderRadius: 50,
							borderColor: "#212529",
							borderWidth: 2,
						}}
					></View>
					<Card />
					<Text style={{ fontWeight: "bold" }}>Card</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 5,
					}}
				>
					<View
						style={{
							width: 20,
							height: 20,
							backgroundColor: "black",
							borderRadius: 50,
							borderColor: "#212529",
							borderWidth: 2,
						}}
					></View>
					<Paypal />
					<Text style={{ fontWeight: "bold" }}>Paypal</Text>
				</View>
			</View>

			<View style={{ marginTop: 130 }}>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TextInput
						style={{
							width: 300,
							height: 50,
							borderRadius: 30,
							borderColor: "#212529",
							borderWidth: 2,
							paddingLeft: 30,
						}}
						placeholder="Example@gmail.com"
					></TextInput>
				</View>
			</View>

			<View style={{ marginTop: 40 }}>
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
							gap: 130,
						}}
					>
						<Text
							style={{ color: "#f9f8fa", fontSize: 20, fontWeight: "bold" }}
						>
							TOTAL
						</Text>
						<Text
							style={{ color: "#f9f8fa", fontSize: 20, fontWeight: "bold" }}
						>
							100$
						</Text>
					</View>
				</View>
				<View style={{ alignItems: "center", marginTop: 20 }}>
					<Link href={"./Home"}>
						<Confirm />
					</Link>
				</View>
			</View>
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
	product: {
		backgroundColor: "#518379",
		width: "45%",
		height: 250,
		margin: 10,
		borderRadius: 20,
	},
});
