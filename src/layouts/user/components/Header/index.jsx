import React, { useState } from "react";

import * as S from "./styles";
import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";

const Header = () => {
  return (
    <S.Wrapper>
      <div className="navbar">
        <div className="navbar-left">
          <img
            className="img-logo"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt=""
          />
          <h4>Học Lập Trình Để Đi Làm</h4>
        </div>
        <div className="navbar-center">
          <div className="box-search">
            <i class="fa-solid fa-magnifying-glass icon-search"></i>
            <input
              className="input-search"
              placeholder="Tìm kiếm khóa học, bài viết , video, ..."
            />
          </div>
        </div>
        <div className="navbar-right">
          <Link className="btn-search-mobile" to={ROUTES.USER.SEARCH}>
            <i class="fa-solid fa-magnifying-glass icon-search"></i>
          </Link>
          <div className="btn-login">Đăng nhập</div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default Header;
