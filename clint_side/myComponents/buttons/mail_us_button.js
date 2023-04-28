import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import {StyleSheet, TouchableOpacity} from "react-native";
import { openURL } from "expo-linking";

function MailUs(props) {
	return (
		<TouchableOpacity style={styles.down} onPress={() => openURL("mailto:maheraladdin@std.mans.edu.eg")}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={140}
				height={140}
				viewBox="0 0 162 162"
				{...props}
			>
				<G data-name="Group 106">
					<Path
						data-name="Path 233"
						d="M81 0A81 81 0 110 81 81 81 0 0181 0z"
						transform="translate(-188 -114) translate(188 114)"
						fill="#518379"
					/>
					<Path
						d="M63.989 296.081a8.971 8.971 0 01-8.989-8.99v-48.006a8.8 8.8 0 012.627-6.429A8.619 8.619 0 0163.989 230H127.3a9.067 9.067 0 019.085 9.085v48.007a8.619 8.619 0 01-2.656 6.362 8.8 8.8 0 01-6.429 2.628zm31.654-28.211l31.657-21.326v-7.459l-31.657 20.847-31.654-20.847v7.459z"
						transform="translate(-188 -114) translate(173.309 -68.04)"
						fill="#f8f9fa"
					/>
				</G>
			</Svg>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	down: {
		position: "relative",
		top: 70,
	}
});

export default MailUs;
