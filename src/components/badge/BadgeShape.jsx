import React from "react"
import { BadgeContext } from "./Badge"


export default function BadgeShape({ children }) {

  const { variant, color } = React.useContext(BadgeContext)

  return (
    <div className={`shape ${variant} ${color}`}>
      {children}
    </div>
  )
}
