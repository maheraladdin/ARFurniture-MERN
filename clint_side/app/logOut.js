import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import ConBtn from "../myComponents/buttons/continue_button";
import LoginFace from "../myComponents/buttons/login_with_facebook_button";
import LoginGoogle from "../myComponents/buttons/login_with_google";
import SignUp from "../myComponents/buttons/sign_up_button";
import { Link } from "expo-router";

const image = { uri: "https://via.placeholder.com/200x100" };

export default function logOut() {
	return (
		<View style={{ marginTop: 40 }}>
			<View style={styles.logo}>
				<Link href={"./Home"}>
					<Back />
				</Link>
				<Text style={{ fontSize: 20 }}>Home</Text>
			</View>
			<ImageBackground source={image} resizeMode="cover">
				<Text style={styles.text}></Text>
			</ImageBackground>

			<View style={{ marginTop: 50 }}>
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
						placeholder="Username or email"
					></TextInput>
				</View>

				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						marginTop: 20,
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
						placeholder="password"
					></TextInput>
				</View>
			</View>

			<View style={{ alignItems: "center", marginTop: 30 }}>
				<Link href={"./profile"}>
					<ConBtn />
				</Link>
			</View>

			<View style={{ alignItems: "center", marginTop: 30 }}>
				<LoginFace />
			</View>

			<View style={{ alignItems: "center", marginTop: 30 }}>
				<LoginGoogle />
			</View>

			<View style={{ alignItems: "center", marginTop: 30 }}>
				<Link href={"./signUp"}>
					<SignUp />
				</Link>
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
	text: {
		fontSize:100,
	},
});
