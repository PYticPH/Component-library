import React from "react"
import { BadgeContext } from "./Badge"

export default function BadgeText({ children }) {

  const { color } = React.useContext(BadgeContext)

  return (
    <p className={color}>{children}</p>
  )
}
