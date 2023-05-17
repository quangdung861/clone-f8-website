import React, { useState } from "react";

import * as S from "./styles";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useNavigate } from "react-router-dom";
import FormEmail from "./components/FormEmail";
import FormPhoneNumber from "./components/FormPhoneNumber";

const LoginPage = () => {
  const navigate = useNavigate();
  const [registerWay, setRegisterWay] = useState("");
  const [dropdownContries, setDropdownContries] = useState(false);

  const renderRegisterWay = () => {
    switch (registerWay) {
      case "email":
        return (
          <FormEmail
            setRegisterWay={setRegisterWay}
            registerWay={registerWay}
          />
        );

      case "phoneNumber":
        return (
          <FormPhoneNumber
            setRegisterWay={setRegisterWay}
            registerWay={registerWay}
            setDropdownContries={setDropdownContries}
            dropdownContries={dropdownContries}
          />
        );

      default:
        break;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <div className="login">
          <div className="login-container">
            {registerWay && (
              <div className="btn-back">
                <i
                  className="fa-solid fa-chevron-left"
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "16px 24px 16px 0px",
                  }}
                  onClick={() => setRegisterWay("")}
                ></i>
              </div>
            )}

            <div className="login-header">
              <img
                src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
                alt=""
                onClick={() => navigate(ROUTES.USER.HOME)}
              />
              <h1>Đăng ký tài khoản F8</h1>
            </div>
            <div className="login-content">
              {registerWay ? (
                renderRegisterWay()
              ) : (
                <>
                  <ul className="list">
                    <li className="item">
                      <button
                        className="--btn-default btn-custome"
                        onClick={() => setRegisterWay("email")}
                      >
                        <img
                          src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                          alt=""
                        />
                        <span>Sử dụng email/ số điện thoại</span>
                      </button>
                    </li>
                    <li className="item">
                      <button
                        className="--btn-default btn-custome btn-custome--disable"
                        onClick={() => setRegisterWay("google")}
                        disabled
                      >
                        <img
                          src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                          alt=""
                        />
                        <span>Tiếp tục với Google</span>
                      </button>
                    </li>
                    <li className="item">
                      <button
                        className="--btn-default btn-custome btn-custome--disable"
                        onClick={() => setRegisterWay("facebook")}
                        disabled
                      >
                        <img
                          src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
                          alt=""
                        />
                        <span>Tiếp tục với Facebook</span>
                      </button>
                    </li>
                    <li className="item">
                      <button
                        className="--btn-default btn-custome btn-custome--disable"
                        onClick={() => setRegisterWay("github")}
                        disabled
                      >
                        <img
                          src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg"
                          alt=""
                        />
                        <span>Tiếp tục với Github</span>
                      </button>
                    </li>
                  </ul>
                  <div style={{ color: "#35414c" }}>
                    Bạn đã có tài khoản?{" "}
                    <Link
                      style={{ color: "#f05123", fontWeight: 500 }}
                      to={ROUTES.USER.LOGIN}
                    >
                      Đăng nhập
                    </Link>
                  </div>
                </>
              )}
              {/*  */}
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
        <div
          className={
            dropdownContries
              ? " modal-overlay modal-overlay-active"
              : "modal-overlay"
          }
          onClick={() => setDropdownContries(false)}
        ></div>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
