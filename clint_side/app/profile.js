import Navigator from "../myComponents/home/navigator";
import {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import EditButton from "../myComponents/buttons/edit_button";
import TurnToDarkMode from "../myComponents/buttons/turn_to_dark_mode";
import PhoneIcon from "../myComponents/profile/light_mode/phone_icon";
import PrivacyPolicyIcon from "../myComponents/profile/light_mode/privacy_policy_icon";
import TermsAndConditions from "../myComponents/profile/light_mode/Terms_and_Conditions";
import Logout from "../myComponents/profile/light_mode/logout";
import {useRouter} from "expo-router";
import { signOutUser } from "../logic/Queries/signOutUser";
import { isLogin } from "../data/isLogin";

export default function profile() {
	const [navigate, setNavigate] = useState("profile");
	const [profileData, setProfileData] = useState(isLogin.userData);

	const router = useRouter();

	const generateButton = (icon, text,activity,callback) => {
		const buttonHandler = async () => {
			callback ? await callback() : null;
			router.push(activity);
		}
		return (
			<TouchableOpacity onPress={activity ? buttonHandler : null} style={styles.ButtonsNavigators}>
				{icon}
				<Text>{text}</Text>
			</TouchableOpacity>
		)
	}

	const Buttons = [
		{
			element: generateButton(<PhoneIcon/>, "Contact US", "contactUs"),
		},
		{
			element: generateButton(<PrivacyPolicyIcon />, "Privacy Policy", "privacyPolicy"),
		},
		{
			element: generateButton(<TermsAndConditions />, "Terms & Conditions", "termsAndConditions"),
		},
		{
			element: generateButton(<Logout />, "logout", "home",signOutUser),
		}
		];

	return (
		<>
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={{uri: profileData.image || "https://via.placeholder.com/200x200"}}
					style={styles.image}
				/>
				<TouchableOpacity onPress={() => router.push("./editProfile")} style={styles.editButton}>
					<EditButton />
				</TouchableOpacity>
				<Text style={styles.customerName}>
					{profileData.username || "Customer Name"}
				</Text>
				<TouchableOpacity style={styles.modeIcon}>
					<TurnToDarkMode />
				</TouchableOpacity>

				{
					Buttons.map(item => item.element)
				}
			</View>
		</ScrollView>
		<View>
			{/* navigator */}
			<Navigator style={styles.navigator} setNavigate={setNavigate} navigate={navigate}/>
		</View>
	</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginBottom: 20,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginTop: 50,
	},
	editButton: {
		position: "absolute",
		top: 220,
	},
	customerName: {
		fontSize: 30,
		marginTop: 40,
	},
	modeIcon: {
		marginVertical: 20,
	},
	ButtonsNavigators: {
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		paddingBottom: 10,
		flex: 1,
		flexDirection: "row",
		gap: 10,
		fontWeight: "bold",
		width: Dimensions.get("window").width - 20,
		marginTop: 20,
	}
});


