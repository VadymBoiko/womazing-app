import React, { FC } from 'react';
import { Dot } from './Dot';


interface DotsProps{
  slidesCount: number;
  goToSlide: (number:number) => void
}

export const Dots:FC<DotsProps> = ({ slidesCount, goToSlide }) => {

  const renderDots = () =>{
    const dots = [];
    for(let i= 0; i< slidesCount; i ++){
      dots.push(<Dot key={`dot-${i}`} number={i} goToSlide={goToSlide} /> )
    }
    return dots
  }

  return (
    <div className='slider__nav'>
      {renderDots()}
    </div>
  )
}
