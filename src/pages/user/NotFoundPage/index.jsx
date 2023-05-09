import React from "react";

import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { ROUTES } from "constants/routes";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <div className="header">
          <div className="header__left">
            <img
              src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              alt=""
              onClick={() => navigate(ROUTES.USER.HOME)}
            />
            <h3>Học lập trình để đi làm</h3>
          </div>
        </div>
        <div className="content">
          <img
            className="content__icon-not-found"
            src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg.webp"
            alt=""
          />
          <h1>Không tìm thấy nội dung 😓</h1>
          <div className="content__text">
            URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.
          </div>
          <div className="content__text">
            Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay vì
            dùng URL đã lưu.
          </div>
          <Link to={ROUTES.USER.HOME}>
            <button className="--btn-default --btn-default--custome">
              Truy cập trang chủ
            </button>
          </Link>
          <div className="content__footer">
            <i className="fa-regular fa-copyright"></i>&nbsp; 2018 - 2023 F8. Nền
            tảng học lập trình hàng đầu Việt Nam
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default NotFoundPage;
