import * as React from "react";
import Svg, { G, Rect, Text, TSpan } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

function ConBtn(props) {
	// router to navigate between activities
	const router = useRouter();

	const continueBtnHandler = async () => {
		props.callback ? await props.callback() : null;
		props.activity ? router.push(props.activity): null;
	}

	return (
		<TouchableOpacity onPress={continueBtnHandler}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={295}
				height={48}
				viewBox="0 0 295 48"
				{...props}
			>
				<G transform="translate(-40 -514)">
					<Rect
						data-name="Rectangle 132"
						width={295}
						height={48}
						rx={24}
						transform="translate(40 514)"
						fill="#518379"
					/>
					<Text
						data-name="CONTINUE"
						transform="translate(188 542)"
						fill="#f8f9fa"
						fontSize={15}
						fontFamily="Arial-BoldMT, Arial"
						fontWeight={700}
					>
						<TSpan x={-37.111} y={0}>
							{"CONTINUE"}
						</TSpan>
					</Text>
				</G>
			</Svg>
		</TouchableOpacity>
	);
}

export default ConBtn;
