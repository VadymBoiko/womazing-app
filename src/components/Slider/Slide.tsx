import React, { FC } from "react";
import { IDataSlider } from "../../interfaces/interfaces";

interface SlideProps{
  dataSlider: IDataSlider
}

export const Slide:FC<SlideProps> = ({dataSlider}) => {
  return (
    <div className="photo-slider__image">
      <img
        src="http://static.showit.co/400/M3C9MMhGQRW0BZADhRNU2A/66406/dmitriy-ilkevich-7dd6tftkqs4-unsplash.jpg"
        alt="wear-shop"
      />
    </div>
  );
};
