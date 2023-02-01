import React, { FC } from 'react';
import { Dot } from './Dot';


interface DotsProps{
  slidesCount: number;
  slideNumber: number;
  goToSlide: (number:number) => void
}

export const Dots:FC<DotsProps> = ({slideNumber, slidesCount, goToSlide }) => {

  const renderDots = () =>{
    const dots = [];
    for(let i= 0; i< slidesCount; i ++){
      dots.push(<Dot key={`dot-${i}`} slideNumber={slideNumber} number={i} goToSlide={goToSlide} /> )
    }
    return dots
  }

  return (
    <div className='slider__nav'>
      {renderDots()}
    </div>
  )
}
