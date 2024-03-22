import React from "react"
const Input = ({colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
            autoFocus
            type = "text"
            placeholder="Check a color"
            required
            value = {colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Input