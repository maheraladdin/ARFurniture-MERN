import {StyleSheet, View, Text, TextInput,Dimensions} from "react-native";
import ConBtn from "../myComponents/buttons/continue_button";
import TermsAndConditions from "../myComponents/profile/light_mode/Terms_and_Conditions";
import {lorem} from "../data/lorem";

export default function termsAndConditions() {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TermsAndConditions />
				<Text style={{ fontWeight: "bold" }}>Terms and Conditions</Text>
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

