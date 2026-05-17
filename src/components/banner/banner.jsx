import React from "react";

export const bannerContext = React.createContext()

export default function Banner({ children, variant }) {

  return (
    <bannerContext.Provider value={{ variant }}>
      <div className={`banner ${variant}`}>
        {children}
      </div>
    </bannerContext.Provider>
  )
}
