import React, { useState, useEffect } from "react";

import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isShowActionList, setIsShowActionList] = useState(false);

  const sidebarItem = [
    {
      icon: <i className="fa-solid fa-house"></i>,
      name: <span>Home</span>,
      pathname: ROUTES.USER.HOME,
    },
    {
      icon: <i className="fa-solid fa-road"></i>,
      name: <span>Lộ trình</span>,
      pathname: ROUTES.USER.LEARNING_PATHS,
    },
    {
      icon: <i className="fa-sharp fa-solid fa-lightbulb"></i>,
      name: <span>Học</span>,
      pathname: ROUTES.USER.COURSES,
    },
    {
      icon: <i className="fa-solid fa-book"></i>,
      name: <span>Blog</span>,
      pathname: ROUTES.USER.BLOG,
    },
  ];

  const renderActionList = () => {
    return sidebarItem.map((item, index) => {
      return (
        <li className="sidebar-item" key={index}>
          <Link
            className="sidebar-item-content"
            to={item.pathname}
            style={
              pathname === item.pathname ? { backgroundColor: "#e8ebed" } : {}
            }
          >
            {item.icon}
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <div className="sidebar-wrapper">
          <div
            className="btn-action"
            onClick={() => setIsShowActionList(!isShowActionList)}
          >
            <i
              className={
                !isShowActionList
                  ? "fa-solid fa-plus icon-plus"
                  : "fa-solid fa-plus icon-plus-active"
              }
            ></i>
            {isShowActionList && (
              <div className="wrapper-modal-action">
                <ul className="modal-action-list">
                  <li className="action-item">
                    <i className="fa-solid fa-pen"></i>
                    <span>Viết blog</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <ul className="sidebar-list">{renderActionList()}</ul>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default Sidebar;
