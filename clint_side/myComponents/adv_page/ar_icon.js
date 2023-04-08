import { View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

function ar(props) {
	return (
		<View>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={55.091}
				height={61.962}
				viewBox="0 0 55.091 61.962"
				{...props}
			>
				<G data-name="Group 1">
					<Path
						data-name="Path 204"
						d="M79.048 61.366l1.076.6 1.076-.6 16.136-8.936 10.334-5.724v-34.1l-1.3-.594-3.07-1.407L80.125 0 56.954 10.605l-3.078 1.409-1.3.594v34.1l10.337 5.722zm8.4-39.9l-7.323 4.054-7.325-4.059-13.07-7.239 20.4-9.336 20.4 9.336zm-5.102 34.187V29.369L103.227 17.8v26.288zM77.9 29.369v26.284L57.022 44.088V17.8z"
						transform="translate(-52.579)"
						fill="#518379"
					/>
				</G>
			</Svg>
		</View>
	);
}

export default ar;
