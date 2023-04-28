import {StyleSheet, View, Text, TextInput, Dimensions} from "react-native";
import Privacy from "../myComponents/profile/light_mode/privacy_policy_icon";
import ConBtn from "../myComponents/buttons/continue_button";
import {lorem} from "../data/lorem";

export default function privacy() {

	// return window dimensions

	return (
		<View style={styles.container}>
				<View style={styles.row}>
					<Privacy />
					<Text style={{ fontWeight: "bold" }}>Privacy policy</Text>
				</View>
				<TextInput
					style={styles.input}
					value={lorem}
					multiline={true}
					editable={false}
				/>
				<ConBtn activity={"profile"}/>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		height: 40,
		gap: 10,
	},
	container: {
		flex: 1,
		alignItems: "center",
		margin: 20,
		justifyContent: "space-between",
	},
	input : {
		borderWidth: 1,
		marginVertical: 20,
		height:Dimensions.get('window').height - 150,
		width:Dimensions.get('window').width - 40,
		padding: 10,
		borderRadius: 10,
	}
});

