import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {TouchableOpacity} from "react-native";
import {useState} from "react";
import {DialogLogin} from "../DialogLogin";
import {isLogin} from "../../data/isLogin";
function ShoppingCart(props) {
	const [visible,setVisible] = useState(false);
	return (
		<TouchableOpacity onPress={() => {
			if(isLogin.state) {
				props.setNavigate("cart");
				props.router.push("/cart");
			}
			else {
				setVisible(true);
			}
		}}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={26}
				height={26.497}
				viewBox="0 0 26 26.497"
				{...props}
			>
				<Path
					d="M58.819 202.5a2.283 2.283 0 01-1.684-.7 2.318 2.318 0 01-.7-1.691 2.283 2.283 0 01.7-1.684 2.318 2.318 0 011.691-.7 2.283 2.283 0 011.684.7 2.318 2.318 0 01.7 1.691 2.283 2.283 0 01-.7 1.684 2.318 2.318 0 01-1.691.7zm13.265 0a2.283 2.283 0 01-1.684-.7 2.318 2.318 0 01-.7-1.691 2.283 2.283 0 01.7-1.684 2.318 2.318 0 011.691-.7 2.283 2.283 0 011.684.7 2.318 2.318 0 01.7 1.691 2.283 2.283 0 01-.7 1.684 2.318 2.318 0 01-1.69.7zM57.1 180.61l3.648 7.561H70.3l4.145-7.561zm-.995-1.99h19.538a1.263 1.263 0 011.159.7 1.319 1.319 0 010 1.393l-4.477 8.059a2.96 2.96 0 01-.947 1.011 2.28 2.28 0 01-1.275.381H60.054L58.2 193.61h16.28v1.99H58.495a2.226 2.226 0 01-2.006-.929 1.908 1.908 0 01.017-2.089l2.122-3.913-5.041-10.679H51V176h3.88zm4.643 9.551z"
					transform="translate(-51 -176)"
					fill="#f8f9fa"
				/>
			</Svg>
			<DialogLogin visible={visible} setVisible={setVisible}/>
		</TouchableOpacity>
	);
}

export default ShoppingCart;
