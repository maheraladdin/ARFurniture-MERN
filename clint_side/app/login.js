import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
	Dimensions,
	KeyboardAvoidingView,
	TouchableOpacity
} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import {useState} from "react";
import ConBtn from "../myComponents/buttons/continue_button";
import LoginFace from "../myComponents/buttons/login_with_facebook_button";
import LoginGoogle from "../myComponents/buttons/login_with_google";
import SignUp from "../myComponents/buttons/sign_up_button";
import {useRouter} from "expo-router";
import {signInUser} from "../logic/Queries/signInUser";
import {passwordValidator} from "../logic/validator/passwordValidator";
import {emailValidator} from "../logic/validator/emailValidator";

export default function login() {

	// email
	const [email, setEmail] = useState("");

	// email invalid
	const [emailInvalid, setEmailInvalid] = useState(true);

	// password
	const [password, setPassword] = useState("");

	// password invalid
	const [passwordInvalid, setPasswordInvalid] = useState(true);

	const router = useRouter();

	// login
	const login = () => {

		// validate email
		if(emailValidator(email))
			setEmailInvalid(false);

		// validate password
		if(passwordValidator(password))
			setPasswordInvalid(false);

		if(emailInvalid && passwordInvalid)
			signInUser(email, password);
	}

	return (
		<KeyboardAvoidingView
			behavior={"padding"}
		>
			<ScrollView>
				<Back />
				<ImageBackground source={{uri: "https://firebasestorage.googleapis.com/v0/b/arfurniture-2d013.appspot.com/o/backgrounds%2Flogin.png?alt=media&token=06509f3a-2ca6-48d8-bdd4-1db0864667b6"}} style={styles.image}>
					<Text style={styles.imageText}>AR Furniture</Text>
				</ImageBackground>

				<View
					style={styles.inputContainer}
					behavior={"padding"}
				>
					<TextInput
						style={styles.input}
						placeholder={"email"}
						placeholderTextColor={"#CCC"}
						onChangeText={setEmail}
					/>
					<TextInput
						style={styles.input}
						placeholder={"password"}
						placeholderTextColor={"#CCC"}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
					<TouchableOpacity>
						<LoginFace />
					</TouchableOpacity>
					<TouchableOpacity>
						<LoginGoogle />
					</TouchableOpacity>
					<ConBtn callback={login} activity={"home"}/>
					<TouchableOpacity onPress={() => router.push("signUp")}>
						<SignUp />
					</TouchableOpacity>
				</View>

			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: 200,
		position: "absolute",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingBottom: 10,
	},
	imageText: {
		fontSize: 30,
		color: "#518379",
	},
	input : {
		width: Dimensions.get("window").width - 20,
		height: 50,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 25,
		paddingLeft: 25,
		fontSize: 15,
	},
	inputContainer : {
		marginTop: 200,
		flex: 1,
		alignItems: "center",
		gap: 30,
		marginBottom: 20,
	}
});
