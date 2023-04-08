import { StyleSheet, View, Text, ScrollView } from "react-native";
import LogTop from "../myComponents/home/logo_top";
import Search from "../myComponents/filter/light_mode/search";
import RedHeart from "../myComponents/home/red_heart_filled";
import AddCart from "../myComponents/buttons/add_to_cart_button_home_page";
import Homee from "../myComponents/navBar/home_icon";
import WhiteHeart from "../myComponents/navBar/white_heart_filled";
import Shopping from "../myComponents/navBar/shopping_cart";
import Avatar from "../myComponents/navBar/avatar";

export default function Likes() {
	return (
		<View style={{marginTop:40}}>
			<ScrollView>
				<View style={styles.logo}>
					<LogTop />
					<Search />
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
								gap: 50,
							}}
						>
							<Text style={{ color: "white" }}>50$</Text>
							<AddCart />
						</View>
					</View>
					<View style={styles.product}>
						<View style={{ alignItems: "flex-end", margin: 10 }}>
							<RedHeart />
						</View>
						<Text style={{ marginTop: 130, color: "white", padding: 10 }}>
							AwesomeChair
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
				</View>

				<View style={styles.product}>
					<View style={{ alignItems: "flex-end", margin: 10 }}>
						<RedHeart />
					</View>
					<Text style={{ marginTop: 130, color: "white", padding: 10 }}>
						AwesomeChair
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
			</ScrollView>
		</View>
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
	product: {
		backgroundColor: "#518379",
		width: "45%",
		height: 250,
		margin: 10,
		borderRadius: 20,
	},
});
