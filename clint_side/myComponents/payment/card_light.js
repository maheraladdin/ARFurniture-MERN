import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={19.705}
			height={16}
			viewBox="0 0 19.705 16"
			{...props}
		>
			<Path
				d="M74.7 232.2v11.624a2.087 2.087 0 01-.643 1.54A2.132 2.132 0 0172.5 246H57.177A2.172 2.172 0 0155 243.823V232.2a2.132 2.132 0 01.636-1.557 2.087 2.087 0 011.54-.643h15.329a2.2 2.2 0 012.2 2.2zm-17.528 2.269h15.333V232.2H57.177zm0 2.987v6.368h15.333v-6.368zm0 6.368z"
				transform="translate(-55 -230)"
				fill="#212529"
			/>
		</Svg>
	);
}

export default SvgComponent;
