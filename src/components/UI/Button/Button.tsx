import React, { FC } from 'react'

interface ButtonProps{
    value: string;
    className?:string;
    type: string;
    onClick: any;
}
export const Button:FC<ButtonProps> = ({value, className, type, onClick }) => {
  return (
    <input 
        className={className}
        type={type}
        value={value}
        onClick={onClick}
    />
  )
}
