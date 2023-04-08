import * as React from "react"
import Svg, { G, Path, Text, TSpan } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={126}
      height={28}
      viewBox="0 0 126 28"
      {...props}
    >
      <G data-name="Group 119">
        <G data-name="Group 51">
          <G data-name="Group 1">
            <Path
              data-name="Path 204"
              d="M64.54 27.731l.486.269.486-.269 7.288-4.039 4.67-2.586V5.7l-.586-.268-1.384-.64L65.027 0 54.556 4.792l-1.391.637-.586.268v15.409l4.67 2.586zM68.338 9.7l-3.312 1.834L61.715 9.7l-5.906-3.273 9.218-4.219 9.218 4.219zM66.03 25.149V13.271l9.436-5.226v11.878zm-2.007-11.878v11.878l-9.436-5.226V8.045z"
              transform="translate(-20 -20) translate(0 2) translate(20 18) translate(-52.579)"
              fill="#518379"
            />
          </G>
        </G>
        <G data-name="Group 2">
          <Text
            data-name="AR Furniture"
            transform="translate(-20 -20) translate(-100.5 -271.5) translate(200.5 311.5)"
            fill="#518379"
            fontSize={15}
            fontFamily="Arial-BoldMT, Arial"
            fontWeight={700}
          >
            <TSpan x={-45.831} y={0}>
              {"AR Furniture"}
            </TSpan>
          </Text>
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
