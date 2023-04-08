import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.4}
      height={18}
      viewBox="0 0 14.4 18"
      {...props}
    >
      <Path
        d="M167.2 186.935a1.95 1.95 0 001.417-.574 1.894 1.894 0 00.585-1.406 1.957 1.957 0 00-.585-1.44 2.01 2.01 0 00-2.835 0 1.957 1.957 0 00-.585 1.44 1.894 1.894 0 00.585 1.406 1.95 1.95 0 001.418.574zm0 7.065a8.836 8.836 0 01-5.175-3.656 10.672 10.672 0 01-2.025-6.289V178.7l7.2-2.7 7.2 2.7v5.355a10.315 10.315 0 01-.4 2.869 11.194 11.194 0 01-1.125 2.621l-2.88-2.79a2.546 2.546 0 00.428-.855 3.426 3.426 0 00.135-.945 3.353 3.353 0 10-6.705 0 3.2 3.2 0 00.979 2.363 3.251 3.251 0 002.374.967 3.04 3.04 0 00.967-.158 4.856 4.856 0 00.9-.4l3.038 2.948a10.068 10.068 0 01-2.183 2.081A8.33 8.33 0 01167.2 194z"
        transform="translate(-160 -176)"
        fill="#212529"
      />
    </Svg>
  )
}

export default SvgComponent