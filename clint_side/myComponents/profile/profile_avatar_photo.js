import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={162}
      height={162}
      viewBox="0 0 162 162"
      {...props}
    >
      <Path
        data-name="Path 229"
        d="M81 0A81 81 0 110 81 81 81 0 0181 0z"
        fill="#518379"
      />
      <Path
        data-name="Union 44"
        d="M0 94V82.252c0-12.928 21.15-23.5 47-23.5s47 10.575 47 23.5V94zm23.5-70.5A23.5 23.5 0 1147 47a23.5 23.5 0 01-23.5-23.5z"
        transform="translate(34 34)"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
