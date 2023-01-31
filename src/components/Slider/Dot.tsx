import React, {FC} from 'react'

interface DotProps{
  number: number;
  goToSlide: (number:number) => void;
}



export const Dot:FC<DotProps> = ({number, goToSlide}) => {
  return (
    <div
    className={`slider__elem ${ number ? "selected" : ""}`}
    onClick={() => goToSlide(number)}
  />
  )
}
