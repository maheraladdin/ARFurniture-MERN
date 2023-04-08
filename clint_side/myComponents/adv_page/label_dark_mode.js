import * as React from "react"
import Svg, { G, Text, TSpan, Path } from "react-native-svg"

function Dark(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={192}
      height={68}
      viewBox="0 0 192 68"
      {...props}
    >
      <G data-name="Group 2">
        <Text
          data-name="AR Furniture"
          transform="rotate(-90 -37.5 263) translate(191.5 310.5)"
          fill="#518379"
          fontSize={11}
          fontFamily="Arial-BoldMT, Arial"
          fontWeight={700}
        >
          <TSpan x={-33.61} y={0}>
            {"AR Furniture"}
          </TSpan>
        </Text>
      </G>
      <G data-name="Group 3">
        <Text
          data-name="Modern Furniture Modern Tech"
          transform="translate(-136.5 -302.5) translate(162.5 320.5)"
          fill="#f8f9fa"
          fontSize={20}
          fontFamily="Arial-BoldMT, Arial"
          fontWeight={700}
        >
          <TSpan x={0} y={0}>
            {"Modern Furniture"}
          </TSpan>
          <TSpan x={0} y={23}>
            {"Modern "}
          </TSpan>
          <TSpan x={0} y={46}>
            {"Tech"}
          </TSpan>
        </Text>
      </G>
      <Path
        data-name="Rectangle 1459"
        transform="translate(17)"
        fill="#fff"
        d="M0 0H4V68H0z"
      />
    </Svg>
  )
}

export default Dark;
