import Svg, { Path } from "react-native-svg";
import * as React from "react";

function AvatarFilled(props) {

    return (
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

    );
}

export default AvatarFilled;
