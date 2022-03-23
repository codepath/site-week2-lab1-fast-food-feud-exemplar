import * as React from "react"
import "./Text.css"

function Text({
  content = "",
  className = "",
  bold = false,
  // ...props
}) {
  return <p className={`text ${bold ? "bold" : "normal"} ${className}`}>{content}</p>
}

export default Text
