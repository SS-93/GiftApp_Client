import React from 'react'
import ReactDOM from "react-dom"

const Overlay = ({children}) => {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+0.75rem)]'
    style={{
 
      top: 20,
      left: 40,
      right: 40,

      bottom: 12,
 
      zIndex: 1000,
      border: "1px",
      bordercolor: "white"
    }}
  >
    {children}
  </div>
  )
}

export default Overlay