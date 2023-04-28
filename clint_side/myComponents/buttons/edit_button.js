import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function EditButton(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={50}
			height={50}
			viewBox="0 0 50 50"
			{...props}
		>
			<G data-name="Group 131" transform="translate(-163 -187)">
				<Circle
					data-name="Ellipse 240"
					cx={25}
					cy={25}
					r={25}
					transform="translate(163 187)"
					fill="#4267b2"
				/>
				<Path
					d="M141.764 209.512l-4.133-4.136 1.356-1.357a1.808 1.808 0 011.372-.533 1.918 1.918 0 011.372.565l1.389 1.389a1.952 1.952 0 010 2.714zm-1.356 1.357l-16.274 16.285H120v-4.136l16.274-16.285z"
					transform="translate(56.166 -3.32)"
					fill="#f8f9fa"
				/>
			</G>
		</Svg>
	);
}

export default EditButton;
