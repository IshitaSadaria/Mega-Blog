import React from 'react'

const Button = (
    children, 
    type='button',
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = '',
    ...props
) => {
  return (
    {children}
  )
}

export default Button