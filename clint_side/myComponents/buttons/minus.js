import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={16.296}
			height={2.579}
			viewBox="0 0 16.296 2.579"
			{...props}
		>
			<Path
				d="M183 531.579V529h16.3v2.579z"
				transform="translate(-183 -529)"
				fill="#f8f9fa"
			/>
		</Svg>
	);
}

export default SvgComponent;
