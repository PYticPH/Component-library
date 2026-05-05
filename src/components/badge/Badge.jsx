import React from "react";


export const BadgeContext = React.createContext()

export default function Badge({ children, variant = 'square', color = 'green' }) {

  return (
    <BadgeContext.Provider value={{ variant, color }}>
      {children}
    </BadgeContext.Provider>
  )
}
