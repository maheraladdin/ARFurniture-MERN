import { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import * as React from "react";
import { useRouter } from "expo-router";

function SvgComponent(props) {
	const [isFilled, setIsFilled] = useState(false);

	const router = useRouter();

	const pressHandler = () => {
		setIsFilled(!isFilled);
		router.push("/profile");
	}

	return (
		<>
			{
				isFilled ? (
					// filled
					<Svg
						xmlns="http://www.w3.org/2000/svg"
						width={27.444}
						height={26.629}
						viewBox="0 0 27.444 26.629"
						{...props}
					>
						<Path
							d="M173.722 287.864a6.169 6.169 0 114.631-1.8 6.269 6.269 0 01-4.631 1.8zM160 301.629V297.6a4.719 4.719 0 01.815-2.787 5.231 5.231 0 012.1-1.758 32.23 32.23 0 015.51-1.93 22.276 22.276 0 015.3-.643 21.338 21.338 0 015.274.665 36.527 36.527 0 015.489 1.908 5.17 5.17 0 012.144 1.758 4.719 4.719 0 01.815 2.787v4.031z"
							transform="translate(-160 -275)"
							fill="#f8f9fa"
						/>
					</Svg>
				) : (
					// not filled
					<TouchableOpacity onPress={pressHandler}>
						<Svg
							xmlns="http://www.w3.org/2000/svg"
							width={27.308}
							height={26.497}
							viewBox="0 0 27.308 26.497"
							{...props}
						>
							<Path
								d="M173.654 287.8a6.139 6.139 0 114.608-1.792 6.238 6.238 0 01-4.608 1.792zM160 301.5v-4.011a4.7 4.7 0 01.811-2.773 5.2 5.2 0 012.091-1.749 32.073 32.073 0 015.483-1.92 22.164 22.164 0 015.27-.64 21.233 21.233 0 015.248.661 35.7 35.7 0 015.458 1.907 5.153 5.153 0 012.142 1.748 4.684 4.684 0 01.806 2.767v4.01zm2.56-2.56h22.188v-1.451a2.337 2.337 0 00-.405-1.3 2.569 2.569 0 00-1-.917 22.658 22.658 0 00-4.992-1.813 22.076 22.076 0 00-4.694-.491 22.677 22.677 0 00-4.736.491 21.672 21.672 0 00-4.992 1.813 2.567 2.567 0 00-1.365 2.219zm11.094-13.7a3.722 3.722 0 10-2.752-1.088 3.73 3.73 0 002.752 1.089zm0-3.84zm0 17.537z"
								transform="translate(-160 -275)"
								fill="#f8f9fa"
							/>
						</Svg>
					</TouchableOpacity>
				)
			}
		</>

	);
}

export default SvgComponent;
