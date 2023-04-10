import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
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
				fill="#212529"
			/>
		</Svg>
	);
}

export default SvgComponent;
