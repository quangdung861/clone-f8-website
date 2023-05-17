import React from "react";

import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <div className="login">
          <div className="login-container">
            <div className="login-header">
              <img
                src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
                alt=""
                onClick={() => navigate(ROUTES.USER.HOME)}
              />
              <h1>Chào mừng đến với F8</h1>
            </div>
            <div className="login-content">
              <ul className="list">
                <li className="item">
                  <button className="--btn-default btn-custome">
                    <img
                      src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                      alt=""
                    />
                    <span>Sử dụng email/ số điện thoại</span>
                  </button>
                </li>
                <li className="item">
                  <button className="--btn-default btn-custome">
                    <img
                      src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                      alt=""
                    />
                    <span>Tiếp tục với Google</span>
                  </button>
                </li>
                <li className="item">
                  <button className="--btn-default btn-custome">
                    <img
                      src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
                      alt=""
                    />
                    <span>Tiếp tục với Facebook</span>
                  </button>
                </li>
                <li className="item">
                  <button className="--btn-default btn-custome">
                    <img
                      src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg"
                      alt=""
                    />
                    <span>Tiếp tục với Github</span>
                  </button>
                </li>
              </ul>
              <div style={{ color: "#35414c" }}>
                Bạn chưa có tài khoản?{" "}
                <Link
                  style={{ color: "#f05123", fontWeight: 500 }}
                  to={ROUTES.USER.REGISTER}
                >
                  Đăng ký
                </Link>
              </div>
            </div>
            <div className="login-footer">
              <p style={{ color: "#4f5a64", fontSize: "12px" }}>
                Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý
                với <br />
                <Link style={{ textDecoration: "underline" }}>
                  Điều khoản sử dụng
                </Link>{" "}
                của chúng tôi.
              </p>
            </div>
          </div>
          <div className="login-bottom">
            <Link>Giới thiệu F8</Link> | <Link>F8 trên Youtube</Link> |{" "}
            <Link>F8 trên Facebook</Link>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
