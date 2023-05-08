import React, { useEffect, useState, useRef, useContext } from "react";

import * as S from "./styles";
import {
  Link,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router-dom";

import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { getSearchListAction } from "redux/user/actions";

import { MyContext } from "App";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.searchReducer);
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);
  const { pathname } = useLocation();
  console.log("🚀 ~ file: index.jsx:24 ~ Header ~ pathname:", pathname);

  const pathnameFinal = pathname.split("/");
  const newPathnameFinal = pathnameFinal
    .slice(0, pathnameFinal.length - 1)
    .join("/");

  const { isBoxSearch } = useContext(MyContext);

  const [isOverlayModal, setIsOverlayModal] = useState(false);

  useEffect(() => {
    if (keyword.length > 1) {
      dispatch(
        getSearchListAction({
          params: {
            q: keyword,
            limit: 3,
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

  useEffect(() => {
    if (inputRef.current) {
      setKeyword("");
      inputRef.current.value = "";
    }
    setIsOverlayModal(false);
  }, [pathname]);

  const handleFocusSearch = (e) => {
    setIsOverlayModal(true);
    setKeyword(e.target.value);
  };

  const handleOverlayModal = () => {
    setKeyword("");
    setIsOverlayModal(false);
  };

  const handleCloseSearch = () => {
    inputRef.current.value = "";
    setKeyword("");
    setIsOverlayModal(false);
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
            <Link
              className="result-header__right"
              state={{ category: "courses", keyword }}
              to={ROUTES.USER.SEARCH}
            >
              Xem thêm
            </Link>
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
            <Link
              className="result-header__right"
              state={{ category: "posts", keyword }}
              to={ROUTES.USER.SEARCH}
            >
              Xem thêm
            </Link>
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
            <h4 className="result-header__left">Video</h4>
            <Link
              className="result-header__right"
              state={{ category: "videos", keyword }}
              to={ROUTES.USER.SEARCH}
            >
              Xem thêm
            </Link>
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
          {pathname !== "/" ? (
            <div
              className="btn-back"
              onClick={() => navigate(newPathnameFinal)}
            >
              <i className="fa-solid fa-chevron-left btn-back__icon"></i>
              <span className="btn-back__text">QUAY LẠI</span>
            </div>
          ) : (
            <h4>Học Lập Trình Để Đi Làm</h4>
          )}
        </div>
        {isBoxSearch && (
          <div className="navbar-center">
            <div className="box-search">
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
              <input
                className="input-search"
                placeholder="Tìm kiếm khóa học, bài viết , video, ..."
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={(e) => handleFocusSearch(e)}
                ref={inputRef}
              />
              {inputRef.current?.value && (
                <i
                  class="fa-solid fa-xmark icon-close"
                  onClick={() => handleCloseSearch()}
                ></i>
              )}

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
        )}

        <div className="navbar-right">
          {isBoxSearch && (
            <Link className="btn-search-mobile" to={ROUTES.USER.SEARCH}>
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
            </Link>
          )}
          <div className="btn-login">Đăng nhập</div>
        </div>
      </div>
      {isOverlayModal && (
        <div
          onClick={() => handleOverlayModal()}
          className="modal-overlay"
        ></div>
      )}
    </S.Wrapper>
  );
};

export default Header;
