import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.49}
      height={18}
      viewBox="0 0 18.49 18"
      {...props}
    >
      <Path
        d="M86.218 208a2.15 2.15 0 01-1.57-.641 2.1 2.1 0 01-.648-1.554v-13.587A2.213 2.213 0 0186.218 190h6.957v2.218h-6.957v13.588h6.957V208zm11.393-4.062l-1.588-1.538 2.288-2.288H90.49v-2.195h7.774l-2.288-2.288 1.588-1.541 4.926 4.949z"
        transform="translate(-84 -190)"
        fill="#212529"
      />
    </Svg>
  )
}

export default SvgComponent
