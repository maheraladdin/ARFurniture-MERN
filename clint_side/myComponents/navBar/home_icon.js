import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {useState} from "react";
import {useRouter} from "expo-router";
import {TouchableOpacity} from "react-native";

function HomeIcon(props) {
	const [isFilled, setIsFilled] = useState(false);

	const router = useRouter();

	const pressHandler = () => {
		setIsFilled(!isFilled);
		router.push("/home");
	}

	return (
		<>
		{
			isFilled ? (
				// filled
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={23.553}
					height={26.497}
					viewBox="0 0 23.553 26.497"
					{...props}
				>
					<Path
						d="M160 242.5v-17.668L171.777 216l11.777 8.832V242.5h-8.832v-10.3h-5.888v10.3z"
						transform="translate(-160 -216)"
						fill="#f8f9fa"
					/>
				</Svg>
			) : (
				// not filled
				<TouchableOpacity onPress={pressHandler}>
					<Svg
						xmlns="http://www.w3.org/2000/svg"
						width={23.553}
						height={26.497}
						viewBox="0 0 23.553 26.497"
						{...props}
					>
						<Path
							d="M162.208 240.289h5.52v-9.2h8.1v9.2h5.52v-14.353l-9.568-7.176-9.568 7.176zM160 242.5v-17.668L171.777 216l11.777 8.832V242.5h-9.936v-9.2h-3.68v9.2zm11.777-12.994z"
							transform="translate(-160 -216)"
							fill="#f8f9fa"
						/>
					</Svg>
				</TouchableOpacity>
			)
		}
		</>
	);
}

export default HomeIcon;
