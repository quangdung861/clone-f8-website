import React, { useEffect, useState, useRef } from "react";

import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { getSearchListAction } from "redux/user/actions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.searchReducer);
  console.log("🚀 ~ file: index.jsx:14 ~ Header ~ searchList:", searchList);
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (keyword.length > 1) {
      dispatch(
        getSearchListAction({
          params: {
            q: keyword,
          },
        })
      );
    } else {
      dispatch(
        getSearchListAction({
          params: {
            q: "",
          },
        })
      );
    }
  }, [keyword]);

  const handleBlurSearch = () => {
    setKeyword("");
  };

  const handleFocusSearch = (e) => {
    setKeyword(e.target.value);
  };

  const renderCourses = () => {
    if (searchList.data.courses[0]) {
      const courses = searchList.data.courses?.map((item, index) => {
        return (
          <div className="result-item" key={index}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        );
      });
      return (
        <div className="content-item">
          <div className="result-header">
            <h4 className="result-header__left">Khoá học</h4>
            <div className="result-header__right">Xem thêm</div>
          </div>
          <div className="result-list">{courses}</div>
        </div>
      );
    }
  };

  const renderPosts = () => {
    if (searchList.data.posts[0]) {
      const posts = searchList.data.posts?.map((item, index) => {
        return (
          <div className="result-item" key={index}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        );
      });
      return (
        <div className="content-item">
          <div className="result-header">
            <h4 className="result-header__left">Bài viết</h4>
            <div className="result-header__right">Xem thêm</div>
          </div>
          <div className="result-list">{posts}</div>
        </div>
      );
    }
  };

  const renderVideos = () => {
    if (searchList.data.videos[0]) {
      const videos = searchList.data.videos?.map((item, index) => {
        return (
          <div className="result-item" key={index}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        );
      });
      return (
        <div className="content-item">
          <div className="result-header">
            <h4 className="result-header__left">Videos</h4>
            <div className="result-header__right">Xem thêm</div>
          </div>
          <div className="result-list">{videos}</div>
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <S.Wrapper>
      <div className="navbar">
        <div className="navbar-left">
          <img
            className="img-logo"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt=""
            onClick={() => navigate(ROUTES.USER.HOME)}
          />
          <h4>Học Lập Trình Để Đi Làm</h4>
        </div>
        <div className="navbar-center">
          <div className="box-search">
            <i className="fa-solid fa-magnifying-glass icon-search"></i>
            <input
              className="input-search"
              placeholder="Tìm kiếm khóa học, bài viết , video, ..."
              onChange={(e) => setKeyword(e.target.value)}
              onBlur={() => handleBlurSearch()}
              onFocus={(e) => handleFocusSearch(e)}
              ref={inputRef}
            />
            <div
              className={
                !keyword
                  ? "container-search-result"
                  : "container-search-result  container-search-result--active"
              }
            >
              <div className="top">
                {!searchList.loading ? (
                  <i
                    className="fa-solid fa-magnifying-glass icon-search"
                    style={{ fontSize: "14px" }}
                  ></i>
                ) : (
                  <i className="fa-solid fa-spinner icon-spin--active"></i>
                )}

                {searchList.loading ? (
                  <span>Tìm '{keyword}'</span>
                ) : !!searchList.data.courses[0] === false &&
                  !!searchList.data.posts[0] === false &&
                  !!searchList.data.videos[0] === false ? (
                  <span>Không có kết quả cho '{keyword}'</span>
                ) : (
                  <span>Kết quả cho '{keyword}'</span>
                )}
              </div>
              <div className="center">
                <div className="content-list">
                  {renderCourses()}
                  {/*  */}
                  {renderPosts()}
                  {/*  */}
                  {renderVideos()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <Link className="btn-search-mobile" to={ROUTES.USER.SEARCH}>
            <i className="fa-solid fa-magnifying-glass icon-search"></i>
          </Link>
          <div className="btn-login">Đăng nhập</div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default Header;
