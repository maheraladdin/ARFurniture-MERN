import { StyleSheet, View, Text,} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import CallUs from "../myComponents/buttons/call_us_button";
import MailUs from "../myComponents/buttons/mail_us_button";
import { Link } from "expo-router";

export default function contactUs() {
	return (
		<View style={{ marginTop: 40 }}>
			<View
				style={{
					margin: 20,
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				<Link href={"./profile"}>
					<Back />
				</Link>
				<Text style={{ fontSize: 20 }}>Profile</Text>
			</View>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View style={{ marginTop: 300 }}>
					<MailUs />
				</View>
				<CallUs />
			</View>
		</View>
	);
}
