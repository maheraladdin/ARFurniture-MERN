import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={29.968}
			height={29.968}
			viewBox="0 0 29.968 29.968"
			{...props}
		>
			<Path
				data-name="dark_mode_FILL1_wght400_GRAD0_opsz48"
				d="M134.984 245.968a14.984 14.984 0 110-29.968q.333 0 .708.021t.957.062a9.093 9.093 0 00-2.331 3.288 10.416 10.416 0 00-.832 4.121 8.953 8.953 0 008.99 8.99 11.148 11.148 0 004.121-.77 9.2 9.2 0 003.288-2.144q.042.5.062.812t.021.6a14.922 14.922 0 01-14.984 14.984z"
				transform="translate(-120 -216)"
				fill="#f8f9fa"
			/>
		</Svg>
	);
}

export default SvgComponent;
