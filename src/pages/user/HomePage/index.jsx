import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./styles";

const HomePage = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="next-arrow-slide" onClick={onClick}>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="prev-arrow-slide" onClick={onClick}>
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Slider {...settings} className="image-slider">
          <div className="image-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="image-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="image-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="image-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </S.Container>
    </S.Wrapper>
  );
};

export default HomePage;
