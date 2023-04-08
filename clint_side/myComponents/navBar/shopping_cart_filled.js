import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={29.975}
			height={26.748}
			viewBox="0 0 29.975 26.748"
			{...props}
		>
			<Path
				d="M5.015 0a1.258 1.258 0 011.233 1.019l.078.653h21.979A1.7 1.7 0 0129.914 3.8l-2.821 10.029a1.672 1.672 0 01-1.609 1.217H8.918l.482 2.508h16.1a1.254 1.254 0 010 2.508H8.312a1.247 1.247 0 01-1.186-1.019L3.978 2.508H1.254a1.254 1.254 0 010-2.508zm1.672 24.241a2.508 2.508 0 112.508 2.508 2.508 2.508 0 01-2.508-2.508zm20.061 0a2.508 2.508 0 11-2.508-2.508 2.508 2.508 0 012.508 2.508z"
				fill="#f8f9fa"
			/>
		</Svg>
	);
}

export default SvgComponent;
