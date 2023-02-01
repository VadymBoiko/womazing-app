import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { data } from './data/data'

import { ReactComponent as Arrow } from '../../icons/Arrow.svg'
import { Dots } from './Dots'

interface SliderProps {
  autoPlayTime: number
}

export const Slider: FC<SliderProps> = ({  autoPlayTime }) => {
  const [slide, setSlide] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>(false)

  const handleClick = (move: number = 1) => {
    setAnimation(false);
    let slideNumber = 0;

    if (slide + move < 0) {
      slideNumber = data.length - 1;
    } else {
      slideNumber = (slide + move) % data.length;
    }

    setSlide(slideNumber);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout)
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === data.length - 1) {
        handleClick(-(data.length - 1))
      }
      else {
        handleClick(1);
      }
    }, autoPlayTime);
    return () => {
      clearInterval(interval);
    };
  }, [data.length, slide, autoPlayTime]);

  const goToSlide = (number: number) => {
    setAnimation(true);
    setSlide(number % data.length);

    const timeout = setTimeout(() => {
      setAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timeout)
    }
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
        <Dots slideNumber={slide} slidesCount={data.length} goToSlide={goToSlide} />
      </div>
      <div className="photo-slider" style={{ backgroundImage: `url(${data[slide].image})` }}></div>
    </div>
  )
}
