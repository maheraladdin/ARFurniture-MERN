import { StyleSheet, View, Text, ScrollView } from "react-native";
import LogTop from "../myComponents/home/logo_top";
import RedHeart from "../myComponents/home/red_heart";
import Homee from "../myComponents/navBar/home_icon";
import WhiteHeart from "../myComponents/navBar/white_heart";
import Shopping from "../myComponents/navBar/shopping_cart_filled";
import Avatar from "../myComponents/navBar/avatar";
import BuyNow from "../myComponents/buttons/buy_now_button";
import Add from "../myComponents/buttons/add";
import Minus from "../myComponents/buttons/minus";
import { Link } from "expo-router";

export default function Carts() {
	return (
		<View style={{ marginTop: 40 }}>
			<ScrollView>
				<View style={styles.logo}>
					<LogTop />
				</View>

				<View style={{ flexDirection: "row" }}>
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
								gap: 30,
							}}
						>
							<Text style={{ color: "white" }}>50$</Text>
							<Minus />
							<Add />
						</View>
					</View>

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
								gap: 30,
							}}
						>
							<Text style={{ color: "white" }}>50$</Text>
							<Minus />
							<Add />
						</View>
					</View>
				</View>
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
					<Link href={"./shoppingCart"}>
						<BuyNow />
					</Link>
				</View>
				<View style={{ marginTop: 150 }}>
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
						<WhiteHeart />
						<Shopping />
						<Avatar />
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		margin: 20,
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
