import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { data } from './data/data'

import { ReactComponent as Arrow } from '../../icons/Arrow.svg'
import { Dots } from './Dots'

interface SliderProps {
  autoPlay: boolean,
  autoPlayTime: number
}

export const Slider: FC<SliderProps> = ({ autoPlay, autoPlayTime }) => {
  const [slide, setSlide] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>(false)

  const handleClick = (move: number = 1) => {
    const timeout = setTimeout(() => {
      setSlide((s) => s + move);
      setAnimation(true);
    }, 300);
    setAnimation(false);
    return () => {
      clearTimeout(timeout)
    }
  }


  useEffect(() => {
    if(slide === data.length -1){
      setAnimation(true);
      const interval = setTimeout(() => {
        setSlide(0);
      }, autoPlayTime);
      return () => {
        clearTimeout(interval);
      };
    
    }else{
      const interval = setInterval(() => {
        handleClick(1);
      }, autoPlayTime);
      return () => {
        clearInterval(interval);
      };
    }
  }, [data.length, slide, autoPlayTime]);

  const goToSlide = (number:number) => {
    setSlide(number % data.length);
  };

  return (
    <div className={`slider ${animation && 'fadeInAnimation'} `}>
      <div className="text-slider">
        <h1 className="text-slider__title">
          {data[slide].title}
        </h1>
        <p className="text-slider__text">
          {data[slide].description}
        </p>
        <div className="text-slider__btn-wrapper">
          <div className="text-slider__btn-wrapper_btn-arrow">
            <Arrow />
          </div>
          <Link to="/Shop">
            <button className="text-slider__btn">Open Shop</button>
          </Link>
        </div>
        <Dots slidesCount={data.length} goToSlide={goToSlide}/>
        <div className="slider__nav">
          <div className="slider__elem"></div>
          <div className="slider__elem"></div>
          <div className="slider__elem"></div>
        </div>
      </div>
        <div className="photo-slider" style={{ backgroundImage: `url(${data[slide].image})` }}></div>
    </div>
  )
}
