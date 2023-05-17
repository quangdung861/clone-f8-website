import React, { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseProListAction,
  getCourseFreeListAction,
  getPostListAction,
  getVideoListAction,
} from "redux/user/actions";

import * as S from "./styles";
import { ROUTES } from "constants/routes";

const HomePage = () => {
  const dispatch = useDispatch();

  const { courseProList, courseFreeList } = useSelector(
    (state) => state.courseReducer
  );

  const { postList } = useSelector((state) => state.postReducer);
  const { videoList } = useSelector((state) => state.videoReducer);

  useEffect(() => {
    dispatch(getCourseProListAction());
    dispatch(getCourseFreeListAction());
    dispatch(getPostListAction({ limit: 8 }));
    dispatch(
      getVideoListAction({
        limit: 8,
      })
    );
  }, []);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="next-arrow-slide" onClick={onClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="prev-arrow-slide" onClick={onClick}>
        <i className="fa-solid fa-chevron-left"></i>
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
        <div className="image-item" key={index}>
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

  const renderCourseProList = () => {
    return courseProList.data?.map((item) => {
      return (
        <div
          className="content-item"
          key={item.id}
          onClick={(e) => {
            if (!item.active) {
              e.preventDefault();
            }
          }}
        >
          <div
            className="box-image"
            style={
              !item.active ? { cursor: "default", pointerEvents: "none" } : {}
            }
          >
            <img className="image" src={item.image} alt="" />
            <div className="box-logo">
              <img src={item.logo} alt="" />
            </div>
            <div className="hover-action">
              <div className="btn-action">Xem khóa học</div>
            </div>
          </div>
          <h3 className="name">
            <Link style={!item.active ? { cursor: "default" } : {}}>
              {item.name}
            </Link>
          </h3>

          {item.priceAfterDiscount ? (
            <div className="sub-name">
              <span className="price-cancel">{item.price.toLocaleString()}đ</span>
              <span className="discount-price">{item.priceAfterDiscount.toLocaleString()}đ</span>
            </div>
          ) : (
            <div className="sub-name">
              <span>{item.price && `${item.price?.toLocaleString()}đ`}</span>
            </div>
          )}
        </div>
      );
    });
  };

  const renderCourseFreeList = () => {
    return courseFreeList.data.map((item) => {
      return (
        <div
          className="content-item"
          key={item.id}
          onClick={(e) => {
            if (!item.active) {
              e.preventDefault();
            }
          }}
        >
          <div
            className="box-image"
            style={
              !item.active ? { cursor: "default", pointerEvents: "none" } : {}
            }
          >
            <img className="image" src={item.image} alt="" />
            {item.logo && (
              <div className="box-logo">
                <img src={item.logo} alt="" />
              </div>
            )}
            <div className="hover-action">
              <div className="btn-action">Xem khóa học</div>
            </div>
          </div>
          <h3 className="name">
            <Link style={!item.active ? { cursor: "default" } : {}}>
              {item.name}
            </Link>
          </h3>
          <div
            className="sub-name"
            style={{ display: "flex", alignItems: "center", color: "#666" }}
          >
            <i
              className="fa-solid fa-user-group"
              style={{ marginRight: "8px", fontSize: "14px" }}
            ></i>
            {item.numberOfMember?.toLocaleString()}
          </div>
        </div>
      );
    });
  };

  const renderPostList = () => {
    return postList.data.map((item) => {
      return (
        <div className="content-item" key={item.id}>
          <div className="box-image">
            <img className="image" src={item.image} alt="" />
            {item.logo && (
              <div className="box-logo">
                <img src={item.logo} alt="" />
              </div>
            )}
            <div className="hover-action">
              <div className="btn-action">Xem bài viết</div>
            </div>
          </div>
          <h3 className="name">
            <Link>{item.name}</Link>
          </h3>
          <div
            className="sub-name"
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={item.user?.avatar}
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
              />

              <div style={{ fontWeight: "500" }}>{item.user?.fullName}</div>
              {item.user.role === "admin" && (
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    fontSize: "12px",
                    color: "#1b74e4",
                    marginLeft: "8px",
                    paddingTop: "4px",
                  }}
                ></i>
              )}
              <span style={{ margin: "0px 8px" }}>·</span>
            </div>

            <span style={{ color: "#666" }}>{item.createAt}</span>
          </div>
        </div>
      );
    });
  };

  const renderVideoList = () => {
    return videoList.data.map((item) => {
      return (
        <div className="content-item" key={item.id}>
          <div
            className="box-image"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* <img className="image" src={item.image} alt="" /> */}
            <div
              style={{
                width: "100%",
                backgroundColor: "transparent",
                position: "absolute",
                left: "0px",
                bottom: "0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <i
                  className="fa-solid fa-play"
                  style={{ color: "#000", fontSize: "12px" }}
                ></i>
              </div>
              <div
                style={{
                  color: "#fff",
                  borderRadius: "20px",
                  border: "2px solid #fff",
                  padding: "6px 14px",
                }}
              >
                03:15
              </div>
            </div>
            <div className="hover-action">
              <div className="btn-action">Xem video</div>
            </div>
          </div>
          <h3 className="name">
            <Link>{item.name}</Link>
          </h3>
          <div
            className="sub-name"
            style={{ display: "flex", flexWrap: "wrap", color: "#666" }}
          >
            <div className="views" style={{ marginRight: "24px" }}>
              <i className="fa-solid fa-eye" style={{ marginRight: "8px" }}></i>
              {item.views}
            </div>
            <div className="likes" style={{ marginRight: "24px" }}>
              <i
                className="fa-solid fa-thumbs-up"
                style={{ marginRight: "8px" }}
              ></i>
              {item.likes}
            </div>
            <div className="comments" style={{ marginRight: "24px" }}>
              <i
                className="fa-solid fa-comment"
                style={{ marginRight: "8px" }}
              ></i>
              {item.comments}
            </div>
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
        <div className="wrapper-content">
          <div className="box-header">
            <h2 className="title">Khóa học</h2>
            <span className="logo">mới</span>
          </div>
          <div className="box-content">{renderCourseProList()}</div>
          <p style={{ color: "#82919b", margin: "14px 0px 0px 0px" }}>
            <span style={{ fontWeight: "500" }}>311.160+ </span> người khác đã
            học
          </p>
          <div className="box-header">
            <h2 className="title">Khóa học miễn phí</h2>
            <Link className="box-header__right" to={ROUTES.USER.LEARNING_PATHS}>
              <span>Xem lộ trình</span>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
          <div className="box-content">{renderCourseFreeList()}</div>
          <div className="box-header">
            <h2 className="title">Bài viết nổi bật</h2>
            <Link className="box-header__right" to={ROUTES.USER.BLOG}>
              <span>Xem tất cả</span>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
          <div className="box-content">{renderPostList()}</div>
          <div className="box-header">
            <h2 className="title">Videos nổi bật</h2>
            <Link className="box-header__right">
              <span>Xem tất cả</span>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
          <div className="box-content">{renderVideoList()}</div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default HomePage;
