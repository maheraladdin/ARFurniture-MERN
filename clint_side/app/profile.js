import { View, Text } from "react-native";
import Homee from "../myComponents/navBar/home_icon";
import WhiteHeart from "../myComponents/navBar/white_heart";
import Shopping from "../myComponents/navBar/shopping_cart";
import Avatar from "../myComponents/navBar/avatar";
import ProfileAvatar from "../myComponents/profile/profile_avatar_photo";
import EditButton from "../myComponents/buttons/edit_button";
import TurnTo from "../myComponents/buttons/turn_to_dark_mode";
import Phone from "../myComponents/profile/light_mode/phone_icon";
import Privacy from "../myComponents/profile/light_mode/privacy_policy_icon";
import Term from "../myComponents/profile/light_mode/Terms_and_Conditions";
import Logout from "../myComponents/profile/light_mode/logout";
import { Link } from "expo-router";

export default function profile() {
	return (
		<>
			<View style={{ alignItems: "center", marginTop: 80 }}>
				<ProfileAvatar />
			</View>
			<View style={{ alignItems: "center", marginTop: -25 }}>
				<Link href={"./editProfile"}>
					<EditButton />
				</Link>
				<Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
					Customer Name
				</Text>
				<TurnTo />
			</View>

			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					marginTop: 20,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						gap: 10,
						width: 270,
						padding: 10,
						borderColor: "#212529",
						borderBottomWidth: 2,
						marginBottom: 18,
					}}
				>
					<Link href={"./contactUs"}>
						<Phone />
					</Link>
					<Text style={{ fontWeight: "bold" }}>Contact us</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						gap: 10,
						width: 270,
						padding: 10,
						borderColor: "#212529",
						borderBottomWidth: 2,
						marginBottom: 18,
					}}
				>
					<Link href={"./privacyPolicy"}>
						<Privacy />
					</Link>
					<Text style={{ fontWeight: "bold" }}>Privacy policy</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						gap: 10,
						width: 270,
						padding: 10,
						borderColor: "#212529",
						borderBottomWidth: 2,
						marginBottom: 18,
					}}
				>
					<Link href={"./termsAndConditions"}>
						<Term />
					</Link>
					<Text style={{ fontWeight: "bold" }}>Terms and Conditions</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						gap: 10,
						width: 270,
						padding: 10,
						borderColor: "#212529",
						borderBottomWidth: 2,
						marginBottom: 18,
					}}
				>
					<Link href={"./logOut"}>
						<Logout />
					</Link>
					<Text style={{ fontWeight: "bold" }}>logout</Text>
				</View>
			</View>

			<View style={{ flex: 1, justifyContent: "flex-end" }}>
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
					<Link href={"./cart"}>
						<Shopping />
					</Link>
					<Avatar />
				</View>
			</View>
		</>
	);
}

