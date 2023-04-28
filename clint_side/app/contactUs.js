import { StyleSheet, View} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import CallUs from "../myComponents/buttons/call_us_button";
import MailUs from "../myComponents/buttons/mail_us_button";

export default function contactUs() {
	return (
		<>
			<Back activity={"Profile"}/>
			<View style={styles.container}>
				<CallUs />
				<MailUs />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row-reverse",
	}
});
