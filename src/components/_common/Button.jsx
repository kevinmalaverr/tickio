import React from 'react'

const Button = ({color, children, click}) => {
  return (
    <button onClick={click} className={`btn ${color}`}>{children}</button>
  )
}

export default Button