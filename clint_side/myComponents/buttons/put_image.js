import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={50}
			height={50}
			viewBox="0 0 50 50"
			{...props}
		>
			<G data-name="Group 132" transform="translate(-163 -187)">
				<Circle
					data-name="Ellipse 241"
					cx={25}
					cy={25}
					r={25}
					transform="translate(163 187)"
					fill="#4267b2"
				/>
				<Path
					d="M35.843 193.795A1.89 1.89 0 0134 191.951V176.19a1.786 1.786 0 01.553-1.275 1.746 1.746 0 011.29-.568h4.517l2.243-2.673h8.6v3.687h3.656v3.687h3.721v12.9a1.746 1.746 0 01-.568 1.29 1.786 1.786 0 01-1.275.553zm10.446-4.486a5.118 5.118 0 10-3.733-1.506 5.051 5.051 0 003.734 1.506zm0-1.843a3.26 3.26 0 01-2.427-.968 3.423 3.423 0 014.839-4.839 3.388 3.388 0 01-2.412 5.807zm10.416-11.307v-2.642h-2.642v-1.843h2.642V169h1.843v2.673h2.673v1.843h-2.672v2.642z"
					transform="translate(140.389 30.603)"
					fill="#f8f9fa"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;
