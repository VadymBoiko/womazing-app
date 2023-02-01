import React from "react";
import { Link } from "react-router-dom";
import { Slider } from "../../components/Slider/Slider";
import Overlay from "../../utilities/Overlay";

import { ReactComponent as QualitySVG } from '../../icons/Quality.svg';
import { ReactComponent as SpeedSVG } from '../../icons/Speed.svg';
import { ReactComponent as ResponsibilitySVG } from '../../icons/Responsibility.svg'

export const Home = () => {
  return (
    <div className="container">
      <div className='photo-slider__background'></div>
      <Slider autoPlayTime = { 7000 } />
      <section className="new-collection">
        <h2 className="new-collection__title">New collection</h2>
        <div className="new-collection__wrapper">
          <div className="new-collection__wrapp">
            <div className="card-item">
              <div className="card-item__img-wrapper">
                <Overlay />
                <img
                  className="card-item__image"
                  src="https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="goods"
                />
              </div>
              <div className="card-item__title">Футболка USA</div>
              <p className="card-item__price">$229</p>
            </div>
            <div className="card-item">
              <div className="card-item__img-wrapper">
                <Overlay />
                <img
                  className="card-item__image"
                  src="https://images.squarespace-cdn.com/content/v1/5f874e5d14ae001a1b6878ae/1607887919356-14Q88OLWD1SKC7Q5MUCJ/christopher-campbell-va0YmkIFtPA-unsplash.jpg"
                  alt="goods"
                />
              </div>
              <div className="card-item__title">Купальник Glow</div>
              <p className="card-item__price">$229</p>
            </div>
            <div className="card-item">
              <div className="card-item__img-wrapper">
                <Overlay />
                <img
                  className="card-item__image"
                  src="https://images.squarespace-cdn.com/content/v1/6035dac02f0723763d80d415/1628687768187-3ZXQJYLDPZ6F8D7WBLXV/ben-eaton-L_kaTYIuu1o-unsplash.jpg?format=2500w"
                  alt="goods"
                />
              </div>
              <div className="card-item__title">Свитшот Sweet Shot</div>
              <p className="card-item__price">$229</p>
            </div>
          </div>
          <button className="new-collection__btn">Open Shop</button>
        </div>
      </section>
      <section className="important">
        <h2 className="imoportant__title">What important for us</h2>
        <div className="important__wrapper">
          <div className="important-element">
            <div className="important-element__svg">
              <QualitySVG/>
            </div>
            <h4 className="important-element__title">Quality</h4>
            <p className="important-element__description">
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </p>
          </div>
          <div className="important-element">
            <div className="important-element__svg">
             <SpeedSVG/>
            </div>
            <h4 className="important-element__title">Speed</h4>
            <p className="important-element__description">
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>
          <div className="important-element">
            <div className="important-element__svg">
             <ResponsibilitySVG/>
            </div>
            <h4 className="important-element__title">Responsibility</h4>
            <p className="important-element__description">
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это Womazing
            </p>
          </div>
        </div>
      </section>
      <section className="dream-team">
        <h2>Dream team Womazing</h2>
        <div className="dream-team__wrapper">
          <div className="dream-team__slider">
            <div className="dream-team__slider_arrow-left">
              <svg
                width="29"
                height="16"
                viewBox="0 0 29 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15"
                  stroke="#858585"
                />
              </svg>
            </div>
            <div className="dream-team__image-wrap">
              <img
                className="dream-team__img"
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                alt="Dream team Womazing"
              />
              <div className="dream-team__slider_nav">
                <div className="dream-team__slider_elem"></div>
                <div className="dream-team__slider_elem"></div>
                <div className="dream-team__slider_elem"></div>
              </div>
            </div>
            <div className="dream-team__slider_arrow-right">
              <svg
                width="29"
                height="16"
                viewBox="0 0 29 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div className="dream-team-desc">
            <h4 className="dream-team-desc__title">For Each</h4>
            <pre className="dream-team-desc__text">
              Every girl is unique. {"\n"}
              However, we are similar in{"\n"}
              a million littlethings.{"\n"}
              {"\n"}
              Womazing looks for these little {"\n"}
              things and creates beautiful{"\n"}
              things that emphasize {"\n"}
              the advantages of every girl.
            </pre>
            <Link  className="dream-team-desc__link" to='/About'>Brand details</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
