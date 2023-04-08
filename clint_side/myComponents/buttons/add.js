import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      viewBox="0 0 19 19"
      {...props}
    >
      <Path
        d="M191 298v-8h-8v-3h8v-8h3v8h8v3h-8v8z"
        transform="translate(-183 -279)"
        fill="#f8f9fa"
      />
    </Svg>
  )
}

export default SvgComponent
