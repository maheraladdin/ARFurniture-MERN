import Svg, { G, Rect, Text, TSpan } from "react-native-svg";
import * as React from "react";

function AllActive(props) {
	return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={71}
					height={56}
					viewBox="0 0 71 56"
					{...props}
				>
					<G data-name="Group 134">
						<G data-name="Group 35">
							<Rect
								data-name="Rectangle 1460"
								width={71}
								height={56}
								rx={28}
								fill="#518379"
								transform="translate(-20 -59) translate(20 59)"
							/>
						</G>
						<Text
							transform="translate(-20 -59) translate(56 94)"
							fill="#f8f9fa"
							fontSize={20}
							fontFamily="ArialMT, Arial"
						>
							<TSpan x={-17.793} y={0}>
								{"ALL"}
							</TSpan>
						</Text>
					</G>
				</Svg>
	);
}

export default AllActive;
