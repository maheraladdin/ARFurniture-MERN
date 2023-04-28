import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
	Dimensions,
	KeyboardAvoidingView,
} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import {useState} from "react";
import ConBtn from "../myComponents/buttons/continue_button";
import signUpUser from "../logic/Queries/reguistUser";
import {passwordValidator} from "../logic/validator/passwordValidator";
import {emailValidator} from "../logic/validator/emailValidator";
import {isLogin} from "../data/isLogin";

export default function Signup() {

	// username
	const [username, setUsername] = useState("");

	// email
	const [email, setEmail] = useState("");

	// email invalid
	const [emailInvalid, setEmailInvalid] = useState(true);

	// password
	const [password, setPassword] = useState("");

	// password invalid
	const [passwordInvalid, setPasswordInvalid] = useState(true);

	// confirm password
	const [confirmPassword, setConfirmPassword] = useState("");

	// confirm password invalid
	const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(true);

	// activity
	const [activity, setActivity] = useState(null);

	// borderColorValidation
	const [borderColorValidation, setBorderColorValidation] = useState("#CCC");

	// register user
	const register = () => {
		// validate email
		if(emailValidator(email)) {
			setEmailInvalid(false);
		}
		if(passwordValidator(password)) {
			setPasswordInvalid(false);
		}
		if(password !== confirmPassword) {
			setConfirmPasswordInvalid(false);
		}
		if(emailInvalid && passwordInvalid && confirmPasswordInvalid) {
			signUpUser(username, email, password);
			isLogin.state ? setActivity("home") : setBorderColorValidation("red");
		}
	}


	return (
		<KeyboardAvoidingView behavior={"padding"} >
			<ScrollView>
				<Back activity={"Login"}/>
				<ImageBackground source={{uri: "https://firebasestorage.googleapis.com/v0/b/arfurniture-2d013.appspot.com/o/backgrounds%2Fsignup.png?alt=media&token=4d83cc89-6edc-4a8d-baf9-3de851f173fd"}} style={styles.image}>
					<Text style={styles.imageText}>AR Furniture</Text>
				</ImageBackground>

				<View
					style={styles.inputContainer}
					behavior={"padding"}
				>
					<TextInput
						style={{
							...styles.input,
							borderColor: borderColorValidation,
						}}
						placeholder={"username"}
						placeholderTextColor={"#CCC"}
						onChangeText={setUsername}
					/>
					<TextInput
						style={{
							...styles.input,
							borderColor: borderColorValidation,
						}}
						placeholder={"email"}
						placeholderTextColor={"#CCC"}
						onChangeText={setEmail}
					/>
					<TextInput
						style={{
							...styles.input,
							borderColor: borderColorValidation,
						}}
						placeholder={"password"}
						placeholderTextColor={"#CCC"}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
					<TextInput
						style={{
							...styles.input,
							borderColor: borderColorValidation,
						}}
						placeholder={"confirm password"}
						placeholderTextColor={"#CCC"}
						onChangeText={setConfirmPassword}
						secureTextEntry={true}
					/>
					<ConBtn callback={register} activity={activity}/>
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
		paddingHorizontal: 25,
		fontSize: 15,
	},
	inputContainer : {
		paddingVertical: 20,
		marginTop: 200,
		flex: 1,
		alignItems: "center",
		gap: 30,
		marginBottom: 20,
	}
});
