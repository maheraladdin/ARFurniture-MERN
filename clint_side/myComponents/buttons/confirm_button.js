import * as React from "react";
import Svg, { G, Rect, Text, TSpan } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={295}
			height={48}
			viewBox="0 0 295 48"
			{...props}
		>
			<G transform="translate(-40 -514)">
				<Rect
					data-name="Rectangle 132"
					width={295}
					height={48}
					rx={24}
					transform="translate(40 514)"
					fill="#518379"
				/>
				<Text
					transform="translate(188 542)"
					fill="#f8f9fa"
					fontSize={15}
					fontFamily="Arial-BoldMT, Arial"
					fontWeight={600}
				>
					<TSpan x={-33.33} y={0}>
						{"CONFIRM"}
					</TSpan>
				</Text>
			</G>
		</Svg>
	);
}

export default SvgComponent;
