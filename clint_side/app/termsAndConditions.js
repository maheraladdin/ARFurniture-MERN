import { StyleSheet, View, Text } from "react-native";
import Terms from "../myComponents/profile/light_mode/Terms_and_Conditions";
import ConBtn from "../myComponents/buttons/continue_button";
import { Link } from "expo-router";

export default function termsAndConditions() {
	return (
		<>
			<View style={{ marginTop: 50 }}>
				<View
					style={{
						flexDirection: "row",
						gap: 10,
						alignItems: "center",
						justifyContent: "center",
						marginBottom: 15,
					}}
				>
					<Terms />
					<Text style={{ fontWeight: "bold" }}>Terms and Conditions</Text>
				</View>
				<View
					style={{
						borderColor: "black",
						borderWidth: 3,
						width: 320,
						height: 500,
						marginLeft: 20,
						padding: 10,
					}}
				>
					<View>
						<Text style={{ fontWeight: "bold" }}>
							Our awesome privacy policy
						</Text>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 50, alignItems: "center" }}>
				<Link href={"./profile"}>
					<ConBtn />
				</Link>
			</View>
		</>
	);
}

