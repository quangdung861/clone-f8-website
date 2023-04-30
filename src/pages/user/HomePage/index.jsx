import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

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

  const slideData = [
    {
      title: "Thành Quả của Học Viên",
      description:
        "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
      button: "Xem thành quả",
      linearGradient: {
        to: "#7514ff",
        from: "rgb(5, 178, 255)",
      },
      imageRight:
        "https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
    },
    {
      title: "F8 trên Youtube",
      description:
        "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
      button: "Truy cập kênh",
      linearGradient: {
        to: "rgb(254, 33, 94)",
        from: "rgb(255, 148, 2)",
      },
      imageRight:
        "https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png",
    },
    {
      title: "F8 trên Facebook",
      description:
        "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
      button: "Truy cập Facebook",
      linearGradient: {
        to: "rgb(0, 126, 254)",
        from: "rgb(6, 195, 254)",
      },
      imageRight:
        "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
    },
    {
      title: "Khóa học HTML CSS Pro",
      description:
        "Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!",
      button: "Tìm hiểu thêm",
      icon: "https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg",
      linearGradient: {
        to: "rgb(104, 40, 250)",
        from: "rgb(255, 186, 164)",
      },
      imageRight:
        "https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png",
    },
    {
      title: "Học ReactJS Miễn Phí",
      description:
        "Khóa học ReactJS từ cơ bản đến nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thưởng gặp với ReactJS.",
      button: "Đăng ký ngay",
      linearGradient: {
        to: "rgb(40, 119, 250)",
        from: "rgb(103, 23, 205)",
      },
      imageRight:
        "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
    },
  ];

  const renderSlideItem = () => {
    return slideData.map((item, index) => {
      return (
        <div className="image-item">
          <div
            className="image"
            style={
              item.linearGradient
                ? {
                    background: `linear-gradient(to right, ${item.linearGradient.to}, ${item.linearGradient.from})`,
                  }
                : {}
            }
          >
            <div className="box-text">
              <Link
                className="box-title"
                style={
                  item.icon ? { display: "flex", alignItems: "center" } : {}
                }
              >
                {item.title}
                {item.icon && (
                  <img
                    src={item.icon}
                    alt=""
                    style={{
                      width: "24px",
                      height: "24px",
                      marginLeft: "10px",
                      paddingTop: "4px",
                    }}
                  />
                )}
              </Link>
              <p className="text-description">{item.description}</p>
              <Link className="box-btn-action">{item.button}</Link>
            </div>
            <img src={item.imageRight} alt="" />
          </div>
        </div>
      );
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Slider {...settings} className="image-slider">
          {renderSlideItem()}
        </Slider>
      </S.Container>
    </S.Wrapper>
  );
};

export default HomePage;
