import React from 'react'
import './Button.css'

export const Button = (props) => {
  
  return (
    <button 
        style={{
            color : props.fontColor,
            backgroundColor : props.backgroundKaColor,
            borderRadius : props.borderKaRadius,
            padding: "9px 1rem",
            cursor: "pointer"
        }}
        className='button'
    >
        {props.children}
    </button>
  )
}