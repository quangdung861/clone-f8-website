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

  const renderCourseProList = () => {
    return courseProList.data.map((item) => {
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
          <div className="sub-name">{item.price}</div>
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

  return (
    <S.Wrapper>
      <S.Container>
        <div className="wrapper-content">
          <div style={{ marginBottom: "80px" }}>
            <h1 style={{ fontWeight: "900" }}>Khóa học</h1>
            <p
              style={{
                maxWidth: "840px",
              }}
            >
              Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa
              học miễn phí, chất lượng, nội dung dễ hiểu.
            </p>
          </div>
          <div className="box-header">
            <h2 className="title">Khóa học Pro</h2>
            <span className="logo">mới</span>
          </div>
          <div className="box-content">{renderCourseProList()}</div>
          <p style={{ color: "#82919b", margin: "14px 0px 0px 0px" }}>
            <span style={{ fontWeight: "500" }}>311.160+ </span> người khác đã
            học
          </p>
          <div className="box-header">
            <h2 className="title">Khóa học miễn phí</h2>
          </div>
          <div className="box-content">{renderCourseFreeList()}</div>
          <div className="section-suggest">
            <div className="section-suggest__left">
              <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
              <p>
                Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham
                gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
              </p>
              <div>
                <button className="--btn-default --btn-default--custome">
                  Tham gia nhóm
                </button>
              </div>
            </div>
            <div className="section-suggest__right">
              <img
                src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default HomePage;
