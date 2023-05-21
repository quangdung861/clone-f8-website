import React, { useEffect, useState, useRef, useContext } from "react";

import * as S from "./styles";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotificationListAction,
  getSearchListAction,
  logoutAction,
  updateNotificationAction,
} from "redux/user/actions";

import { MyContext } from "App";
import SidebarMobile from "../SidebarMobile";
import moment from "moment";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.searchReducer);
  const { userInfo } = useSelector((state) => state.userReducer);
  const { notificationList } = useSelector(
    (state) => state.notificationReducer
  );
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);
  const { pathname } = useLocation();

  const pathnameFinal = pathname.split("/");
  const newPathnameFinal = pathnameFinal
    .slice(0, pathnameFinal.length - 1)
    .join("/");

  const { isBoxSearch, cssHeader } = useContext(MyContext);

  const [isOverlayModal, setIsOverlayModal] = useState(false);

  const [isShowSidebarMobile, setIsShowSidebarMobile] = useState(null);

  const [isDropdownAccount, setIsDropdownAccount] = useState(false);

  const [isShowDropdownNotification, setIsShowDropdownNotification] =
    useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setIsShowDropdownNotification(false);
      }
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsDropdownAccount(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsShowDropdownNotification(!isShowDropdownNotification);
    dispatch(getNotificationListAction({ limit: 10 }));
    setLimitNotification(20);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logoutAction());
  };

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
    setIsDropdownAccount(false);
    setIsShowDropdownNotification(false);
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

  const [limitNotification, setLimitNotification] = useState(20);

  const handleSeeMore = () => {
    if (limitNotification - 10 < notificationList.meta.total) {
      dispatch(getNotificationListAction({ limit: limitNotification }));
      setLimitNotification(limitNotification + 10);
    }
  };

  const handleNotificationItem = (postId) => {
    dispatch(
      updateNotificationAction({
        id: postId,
        status: "watched",
        limit: limitNotification - 10,
      })
    );
  };

  // const handleOpenDropdownNotification = () => {
  //   dispatch(getNotificationListAction({ limit: 10 }));
  //   setIsShowDropdownNotification(true);
  //   // setIsOverlayModal(true);
  //   setLimitNotification(20);
  // };

  const renderNotificationList = () => {
    return notificationList.data?.map((item) => {
      var createAt = moment(item.createdAt).fromNow();
      let message = item.name;
      if (message.length > 50) {
        message =
          item.name
            .slice(0, 50)
            .split(" ")
            .splice(0, item.name.slice(0, 50).split(" ").length - 1)
            .join(" ") + "...";
      }
      return (
        <li
          key={item.id}
          className={
            item.status === "not seen"
              ? "notification-item"
              : "notification-item notification-item-watched"
          }
          onClick={() =>
            item.status !== "watched" && handleNotificationItem(item.id)
          }
        >
          <img
            src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
            alt=""
          />
          <div className="notification-item__box">
            <div className="notification-item-message">
              Bài học&nbsp;<span>{message}</span>
              &nbsp;mới được thêm mới được thêm vào.
            </div>
            <div className="notification-item-date">{createAt}</div>
          </div>
        </li>
      );
    });
  };

  return (
    <S.Wrapper style={cssHeader}>
      <div className="navbar">
        <div className="navbar-left">
          <img
            className="img-logo"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt=""
            onClick={() => navigate(ROUTES.USER.HOME)}
          />
          <i
            className="fa-solid fa-bars icon-menu-mobile"
            onClick={() => setIsShowSidebarMobile(true)}
          ></i>
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
                  className="fa-solid fa-xmark icon-close"
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
          {!userInfo.data.id && (
            <div
              className="btn-login"
              onClick={() => navigate(ROUTES.USER.LOGIN)}
            >
              Đăng nhập
            </div>
          )}
          {userInfo.data.id && (
            <>
              <div className="notification" ref={dropdownRef1}>
                <i
                  className="fa-solid fa-bell"
                  onClick={() => toggleDropdown()}
                ></i>
                {isShowDropdownNotification && (
                  <div className="dropdownNotification">
                    <div className="notification-header">
                      <span>Thông báo</span>
                      <span onClick={() => handleNotificationItem()}>
                        Đánh dấu đã đọc
                      </span>
                    </div>

                    <ul className="notification-list">
                      {renderNotificationList()}
                      <div className="see-more">
                        <span onClick={() => handleSeeMore()}>Xem thêm</span>
                      </div>
                    </ul>
                  </div>
                )}
              </div>

              <div className="account" ref={dropdownRef2}>
                <img
                  src={userInfo.data?.images?.avatar?.url}
                  alt=""
                  onClick={() => {
                    setIsDropdownAccount(!isDropdownAccount);
                  }}
                />
                {isDropdownAccount && (
                  <div className="dropdown-acount-action">
                    <div className="dropdown-acount-action__header">
                      <img src={userInfo.data?.images?.avatar?.url} alt="" />
                      <span>{userInfo.data.fullName}</span>
                    </div>
                    <div className="dividing-line"></div>
                    <ul className="action-list">
                      <Link to={ROUTES.USER.ACCOUNT.PROFILE}>
                        <li className="action-item">Trang cá nhân</li>
                      </Link>
                      <li
                        className="action-item"
                        onClick={() => handleLogout()}
                      >
                        Đăng xuất
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {isOverlayModal && (
        <div
          onClick={() => handleOverlayModal()}
          className="modal-overlay"
        ></div>
      )}
      <SidebarMobile
        setIsShowSidebarMobile={setIsShowSidebarMobile}
        isShowSidebarMobile={isShowSidebarMobile}
      />
    </S.Wrapper>
  );
};

export default Header;
