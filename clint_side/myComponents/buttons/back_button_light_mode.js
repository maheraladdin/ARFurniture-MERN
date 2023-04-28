import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";
import {Text, TouchableOpacity,StyleSheet} from "react-native";

function BackButton(props) {

	const router = useRouter();

	return (
		<TouchableOpacity style={styles.backButton} onPress={router.back}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={16.349}
				height={27.532}
				viewBox="0 0 16.349 27.532"
				{...props}
			>
				<Path
					d="M247.8 182.532L234 168.766 247.8 155l2.55 2.583-11.183 11.183 11.183 11.183z"
					transform="translate(-234 -155)"
					fill={props.color || "#212529"}
				/>
			</Svg>
			<Text style={{
				...styles.text,
				color: props.color || "#212529"
			}}>
				{props.activity || "back"}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	backButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		Position: "absolute",
		top: 20,
		left: 10,
		zIndex: 1000,
	},
	text: {
		fontSize: 20,
	}
});

export default BackButton;
