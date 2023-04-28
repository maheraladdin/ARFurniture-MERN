import Svg, { G, Rect, Path } from "react-native-svg";

function LampActive(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={71}
			height={56}
			viewBox="0 0 71 56"
			{...props}
		>
			<G data-name="Group 136">
				<G data-name="Group 49">
					<Rect
						data-name="Rectangle 1460"
						width={71}
						height={56}
						rx={28}
						transform="translate(-283 -59) translate(283.222 59) translate(-.222)"
						fill="#518379"
					/>
				</G>
				<G fill="none" stroke="#f8f9fa" strokeLinecap="round" strokeWidth={2}>
					<Path
						data-name="Path 225"
						d="M23.673 3h-10.22a3.862 3.862 0 00-3.586 2.428L5.232 17.015a3.862 3.862 0 003.586 5.3h19.49a3.862 3.862 0 003.586-5.3L27.259 5.428A3.863 3.863 0 0023.673 3z"
						transform="translate(-283 -59) translate(299.937 66.619)"
					/>
					<Path
						data-name="Path 226"
						d="M10.838 37.762h15.45"
						strokeLinejoin="round"
						transform="translate(-283 -59) translate(299.937 66.619)"
					/>
					<Path
						data-name="Path 227"
						d="M18.563 37.762V23.278"
						strokeLinejoin="round"
						transform="translate(-283 -59) translate(299.937 66.619)"
					/>
				</G>
			</G>
		</Svg>
	);
}

export default LampActive;
