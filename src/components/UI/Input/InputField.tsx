import React, { FC } from 'react'

interface InputFieldProps{
    className?: string;
    placeholder: string;
    type: string;
    onChange: any,
}


export const InputField:FC<InputFieldProps> = ({className, placeholder, type, onChange}) => {
  return (
    <input
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
    />
  )
}
