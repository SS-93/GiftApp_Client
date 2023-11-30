import React from 'react'
import ReactDOM from "react-dom"

const Overlay = ({children}) => {
  return (

    
    <div
    style={{
        border: 'none',
        outline: 'none',
        width: '250px',
        

      position: "absolute",
      top: 100,
      left: 320,
      right: 0,
      bottom: 425,
    //   backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,

    
    }}

  >
   
    {children}
    

  </div>
  
  )
}

export default Overlay