import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      {...props}
    >
      <Path
        d="M136.875 234a13.486 13.486 0 01-6.062-1.5 20.807 20.807 0 01-9.312-9.312 13.485 13.485 0 01-1.5-6.062 1.11 1.11 0 011.124-1.126h3.5a.884.884 0 01.612.238 1.1 1.1 0 01.338.638l.675 3.15a1.8 1.8 0 01-.012.637.963.963 0 01-.263.488l-2.5 2.525a20.754 20.754 0 003.137 4.05 17.339 17.339 0 003.938 2.925l2.375-2.45a1.382 1.382 0 01.575-.387 1.156 1.156 0 01.65-.037l2.975.65A1.092 1.092 0 01138 229.5v3.375a1.11 1.11 0 01-1.125 1.125z"
        transform="translate(-120 -216)"
        fill="#f8f9fa"
      />
    </Svg>
  )
}

export default SvgComponent
