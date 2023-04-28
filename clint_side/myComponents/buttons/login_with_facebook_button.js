import * as React from "react";
import Svg, { G, Rect, Text, TSpan, Path } from "react-native-svg";

function LoginFace(props) {
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
				stroke="#4260b4"
				strokeWidth={2}
			>
				<Rect width={295} height={48} rx={24} stroke="none" />
				<Rect x={1} y={1} width={293} height={46} rx={23} />
			</G>
			<Text
				data-name="LOGIN WITH FACEBOOK"
				transform="translate(-40 -579) translate(188 607)"
				fill="#4267b2"
				fontSize={10}
				fontFamily="Arial-BoldMT, Arial"
				fontWeight={700}
			>
				<TSpan x={-59.719} y={0}>
					{"LOGIN WITH FACEBOOK"}
				</TSpan>
			</Text>
			<G
				data-name="Component 1"
				transform="translate(-40 -579) translate(61 595)"
			>
				<Path data-name="Rectangle 1458" fill="none" d="M0 0H16V16H0z" />
				<Path
					data-name="Path 1"
					d="M85.422 16V8.711h2.489l.356-2.844h-2.845V4.089c0-.8.267-1.422 1.422-1.422h1.511V.089C88 .089 87.111 0 86.133 0a3.431 3.431 0 00-3.644 3.733v2.134H80v2.844h2.489V16z"
					transform="translate(-76)"
					fill="#4267b2"
					fillRule="evenodd"
				/>
			</G>
		</Svg>
	);
}

export default LoginFace;
