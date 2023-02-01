import React, {FC} from 'react'

interface DotProps{
  slideNumber: number;
  number: number;
  goToSlide: (number:number) => void;
}

export const Dot:FC<DotProps> = ({slideNumber, number , goToSlide}) => {
  return (
    <div
      className={`slider__elem ${ slideNumber === number ? "slider__selected" : "slider__elem"}`}
      onClick={() => goToSlide(number)}
    />
  )
}
