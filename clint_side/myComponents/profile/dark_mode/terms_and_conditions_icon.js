import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.053}
      height={18}
      viewBox="0 0 17.053 18"
      {...props}
    >
      <Path
        d="M160 194v-1.421h11.368V194zm5.258-5.021L160 183.721l1.658-1.705 5.305 5.258zm6.016-6.016l-5.258-5.305 1.705-1.658 5.258 5.258zm4.784 10.089l-12.695-12.695.995-.995 12.695 12.695z"
        transform="translate(-160 -176)"
        fill="#f8f9fa"
      />
    </Svg>
  )
}

export default SvgComponent
