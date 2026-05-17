import React from "react";
import { bannerContext } from "./banner.jsx"
import success from "../../assets/success.png"
import error from "../../assets/error.png"
import info from "../../assets/info.png"
import warning from "../../assets/warning.png"


export default function BannerTitle({ children }) {

  const { variant } = React.useContext(bannerContext)

  function getVariant(str) {

    let img;

    switch (str) {
      case 'success':
        img = success
        break

      case 'error':
        img = error
        break

      case 'info':
        img = info
        break

      case 'warning':
        img = warning
        break

      default:
        img = success
    }

    return img
  }

  const imgSrc = getVariant(variant)

  console.log(imgSrc)

  return (
    <div className="banner-title-container">
      <img src={imgSrc} alt={imgSrc.match(/warning|info|success|error/)[0]} />
      <h2 className={variant}>{children}</h2>
    </div>
  )
}
