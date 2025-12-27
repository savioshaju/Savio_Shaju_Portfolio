import React from "react";

export default function SketchText({
  text,
  size = 64,
  weight = 700,
  color = "#111827",
  offset = 0.8,
  className = "",
}) {
  const width = text.length * size * 0.6;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${size + 20}`}
      height={size + 12}
      aria-label={text}
    >
      <text
        x="0"
        y={size}
        fontSize={size}
        fontWeight={weight}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {text}
      </text>

      <text
        x={offset}
        y={size + offset}
        fontSize={size}
        fontWeight={weight}
        fill="none"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.45"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {text}
      </text>
    </svg>
  );
}
