import * as React from "react";
import Svg, { G, Rect, Text, TSpan, Path } from "react-native-svg";

function LoginGoogle(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={295}
			height={48}
			viewBox="0 0 295 48"
			{...props}
		>
			<G
				data-name="Rectangle 133"
				transform="translate(-40 -579) translate(40 579)"
				fill="none"
				stroke="#db4437"
				strokeWidth={2}
			>
				<Rect width={295} height={48} rx={24} stroke="none" />
				<Rect x={1} y={1} width={293} height={46} rx={23} />
			</G>
			<Text
				data-name="LOGIN WITH Google"
				transform="translate(-40 -579) translate(188 607)"
				fill="#db4437"
				fontSize={10}
				fontFamily="Arial-BoldMT, Arial"
				fontWeight={700}
			>
				<TSpan x={-53.33} y={0}>
					{"LOGIN WITH GOOGLE"}
				</TSpan>
			</Text>
			<G data-name="g+" transform="translate(-40 -579) translate(61 595)">
				<Path data-name="Rectangle 121" fill="none" d="M0 0H16V16H0z" />
				<Path
					data-name="Path 51"
					d="M16 4.4v1.5h-1.5v1.5H13V5.8h-1.5V4.4H13V2.9h1.5v1.5zm-10.9 0h4.8c0 .3.1.5.1.8a4.7 4.7 0 01-4.9 5A5.1 5.1 0 015.1 0a4.938 4.938 0 013.4 1.3L7.1 2.7a2.666 2.666 0 00-2-.8 3.222 3.222 0 00-3.2 3.2 3.159 3.159 0 003.2 3.2A2.724 2.724 0 008 6.1H5.1z"
					transform="translate(0 3)"
					fill="#db4437"
					fillRule="evenodd"
				/>
			</G>
		</Svg>
	);
}

export default LoginGoogle;
