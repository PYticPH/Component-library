import React from "react"
import { bannerContext } from "./banner"
export default function BannerText({ children }) {

  const { variant } = React.useContext(bannerContext)

  return (
    <p className={`banner-text ${variant}`}>{children}</p>
  )
}
