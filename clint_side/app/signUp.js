import {
	StyleSheet,
	View,
	Text,
	TextInput,
	ImageBackground,
} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import ConBtn from "../myComponents/buttons/continue_button";
import { Link } from "expo-router";

const image = { uri: "https://via.placeholder.com/200x100" };

export default function signUp() {
	return (
		<View style={{ marginTop: 40 }}>
			<View style={styles.login}>
				<Link href={"./profile"}>
					<Back />
				</Link>
				<Text style={{ fontSize: 20 }}>Login</Text>
			</View>
			<ImageBackground source={image} resizeMode="cover">
				<Text style={styles.text}></Text>
			</ImageBackground>

			<View style={{ marginTop: 80 }}>
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
						placeholder="Username"
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
						placeholder="Example@gmail.com"
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
						placeholder="Password"
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
						placeholder="Confirm Password"
					></TextInput>
				</View>
			</View>

			<View style={{ alignItems: "center", marginTop: 60 }}>
				<Link href={"./profile"}>
					<ConBtn />
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	login: {
		margin: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	text: {
		fontSize: 100,
	},
});
