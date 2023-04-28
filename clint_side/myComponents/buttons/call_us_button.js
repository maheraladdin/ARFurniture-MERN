import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import {TouchableOpacity,StyleSheet} from "react-native";
import { openURL } from "expo-linking";

function CallUS(props) {
	return (
		<TouchableOpacity style={styles.up} onPress={() => openURL("tel:+123456789")}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={140}
				height={140}
				viewBox="0 0 162 162"
				{...props}
			>
				<G data-name="Group 105">
					<Path
						data-name="Path 233"
						d="M81 0A81 81 0 110 81 81 81 0 0181 0z"
						transform="translate(-188 -114) translate(188 114)"
						fill="#518379"
					/>
					<Path
						d="M190.312 291a56.19 56.19 0 01-25.26-6.25 86.694 86.694 0 01-38.8-38.8 56.189 56.189 0 01-6.25-25.26 4.625 4.625 0 014.685-4.69h14.583a3.684 3.684 0 012.552.99 4.6 4.6 0 011.406 2.656l2.812 13.125a7.492 7.492 0 01-.052 2.656 4.014 4.014 0 01-1.094 2.031l-10.417 10.521a86.476 86.476 0 0013.073 16.875 72.247 72.247 0 0016.406 12.188l9.9-10.208a5.759 5.759 0 012.4-1.615 4.815 4.815 0 012.708-.156l12.4 2.708A4.551 4.551 0 01195 272.25v14.063a4.625 4.625 0 01-4.688 4.687z"
						transform="translate(-188 -114) translate(111.5 -58.5)"
						fill="#f8f9fa"
					/>
				</G>
			</Svg>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	up: {
		position: "relative",
		bottom: 70,
	}
});

export default CallUS;
