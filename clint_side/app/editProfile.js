import {StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity,Dimensions,KeyboardAvoidingView} from "react-native";
import ChangePhoto from "../myComponents/buttons/put_image";
import Back from "../myComponents/buttons/back_button_light_mode";
import Confirm from "../myComponents/buttons/confirm_button";
import {useRouter} from "expo-router";
import {useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import updateUser from "../logic/Queries/user/updateUser";
import {isLogin} from "../data/isLogin";

export default function editProfile() {

	// router
	const router = useRouter();

	// image
	const [image, setImage] = useState(isLogin.userData.image || "https://via.placeholder.com/200x200");


	// username
	const [username, setUsername] = useState("");

	// email
	const [email, setEmail] = useState("");

	// password
	const [password, setPassword] = useState("");

	const confirmHandler = () => {
		updateUser(username,email,password,image);
		router.push("./profile");
	}

	const pickImage = async () => {
		// result store the chosen image from gallery
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: Platform.OS === "android" && true,
			quality: 1,
			base64: true,
		});

		// in case choosing image process 's not canceled
		if (!result.canceled) {
			// return javascript code form the class diagram image
			setImage('data:image/jpeg;base64,' + result.assets[0].base64);
		}
	};






	return (
		<KeyboardAvoidingView
			behavior={"padding"}
		>
		<ScrollView>
				<Back activity={"Profile"}/>
				<View style={styles.container}>
					<Image
						source={{uri: image}}
						style={styles.image}
					/>
					<TouchableOpacity onPress={pickImage} style={styles.ChangePhoto}>
						<ChangePhoto />
					</TouchableOpacity>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder={"Username"}
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
							placeholder={"Password"}
							placeholderTextColor={"#CCC"}
							onChangeText={setPassword}
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
		paddingLeft: 25,
		marginBottom: 25,
	},
	inputContainer : {
		marginTop: 40,
	}
});

