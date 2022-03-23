import * as React from "react"
import "./Chip.css"

function Chip({
  label = "",
  isActive = false,
  onClick = () => {},
  onClose = () => {},
  // ...props
}) {
  return (
    <button
      className={`chip ${isActive ? "active" : ""}`}
      onClick={onClick}
      // {...props}
    >
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  )
}

export default Chip
