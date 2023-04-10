import { StyleSheet, View, Text, ScrollView } from "react-native";
import LogTop from "../myComponents/home/logo_top";
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
						<View style={{ alignItems: "flex-end" }}>
							<View
								style={{
									margin: 10,
									backgroundColor: "orange",
									width: 30,
									height: 30,
									borderRadius: 50,
									borderColor: "#f8f9fa",
									borderWidth: 3,
								}}
							></View>
						</View>
						<Text
							style={{
								marginTop: 130,
								color: "white",
								padding: 10,
								fontWeight: "bold",
							}}
						>
							Awesome chair
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-evenly",
								alignItems: "center",
								gap: 10,
							}}
						>
							<Text
								style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
							>
								50$
							</Text>
							<Minus />
							<Text
								style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
							>
								1
							</Text>
							<Add />
						</View>
					</View>

					<View style={styles.product}>
						<View style={{ alignItems: "flex-end" }}>
							<View
								style={{
									margin: 10,
									backgroundColor: "orange",
									width: 30,
									height: 30,
									borderRadius: 50,
									borderColor: "#f8f9fa",
									borderWidth: 3,
								}}
							></View>
						</View>
						<Text
							style={{
								marginTop: 130,
								color: "white",
								padding: 10,
								fontWeight: "bold",
							}}
						>
							Awesome chair
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-evenly",
								alignItems: "center",
								gap: 10,
							}}
						>
							<Text
								style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
							>
								50$
							</Text>
							<Minus />
							<Text
								style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
							>
								1
							</Text>
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
							gap: 100,
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
						<Link href={"./Home"}>
							<Homee />
						</Link>
						<Link href={"./likes"}>
							<WhiteHeart />
						</Link>
						<Shopping />
						<Link href={"./profile"}>
							<Avatar />
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
	},
	product: {
		backgroundColor: "#518379",
		width: "45%",
		height: 250,
		margin: 10,
		borderRadius: 20,
	},
});
