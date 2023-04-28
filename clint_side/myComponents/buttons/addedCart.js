import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function AddedCart(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={28}
            viewBox="0 0 42 28"
            {...props}
        >
            <Rect
                data-name="Rectangle 132"
                width={42}
                height={28}
                rx={14}
                fill="#518379"
            />
            <Path
                d="M161.559 355.86L154 348.3l1.451-1.451 6.108 6.108L174.516 340l1.451 1.451z"
                transform="translate(-143.984 -333.93)"
                fill="#f8f9fa"
            />
        </Svg>
    )
}

export default AddedCart;
