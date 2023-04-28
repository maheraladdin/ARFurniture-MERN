import {StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity,Dimensions,KeyboardAvoidingView} from "react-native";
import ChangePhoto from "../myComponents/buttons/put_image";
import Back from "../myComponents/buttons/back_button_light_mode";
import Confirm from "../myComponents/buttons/confirm_button";
import {useRouter} from "expo-router";
import {useState} from "react";

export default function editProfile() {

	const router = useRouter();

	// username
	const [username, setUsername] = useState("");

	// email
	const [email, setEmail] = useState("");

	// phone number
	const [phoneNumber, setPhoneNumber] = useState("");

	const confirmHandler = () => {
		router.push("./profile");
	}

	return (
		<KeyboardAvoidingView
			behavior={"padding"}
		>
		<ScrollView>
				<Back activity={"Profile"}/>
				<View style={styles.container}>
					<Image
						source={{uri: "https://via.placeholder.com/200x200"}}
						style={styles.image}
					/>
					<TouchableOpacity style={styles.ChangePhoto}>
						<ChangePhoto />
					</TouchableOpacity>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder={"User name"}
							placeholderTextColor={"#CCC"}
							onChangeText={setUsername}
						/>
						<TextInput
							style={styles.input}
							placeholder={"Email"}
							placeholderTextColor={"#CCC"}
							onChangeText={setEmail}
						/>
						<TextInput
							style={styles.input}
							placeholder={"Phone number"}
							placeholderTextColor={"#CCC"}
							onChangeText={setPhoneNumber}
						/>
					</View>

					<TouchableOpacity onPress={confirmHandler} style={styles.confirmButton}>
						<Confirm />
					</TouchableOpacity>
				</View>
		</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginTop: 50,
	},
	ChangePhoto: {
		position: "absolute",
		top: 220,
	},
	container: {
		flex: 1,
		alignItems: "center",
		marginBottom: 20,
	},
	confirmButton: {
		marginVertical: 30,
	},
	input : {
		width: Dimensions.get("window").width - 20,
		height: 50,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 25,
		padding: 25,
		marginBottom: 25,
	},
	inputContainer : {
		marginTop: 40,
	}
});

