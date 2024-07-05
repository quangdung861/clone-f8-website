import React, { useState } from "react";

import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import EmailFormLogin from "./components/EmailFormLogin";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "firebaseConfig";
import { addDocument, generateKeywords } from "services";
import { serverTimestamp } from "firebase/firestore";
import avatarDefault from "assets/avatar-mac-dinh-1.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const [dropdownContries, setDropdownContries] = useState(false);

  const [loginWay, setLoginWay] = useState("");

  const renderLoginWay = () => {
    switch (loginWay) {
      case "email":
        return <EmailFormLogin setLoginWay={setLoginWay} loginWay={loginWay} />;

      default:
        break;
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      if (data) {
        const { isNewUser } = getAdditionalUserInfo(data);
        if (isNewUser) {
          addDocument("users", {
            fullName: data.user.displayName,
            email: data.user.email,
            avatar: data.user.photoURL ? data.user.photoURL : avatarDefault,
            photoCover:
              "https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png",
            uid: data.user.uid,
            providerId: data.providerId,
            keywords: generateKeywords(data.user.displayName.toLowerCase()),
          });
        }
      }
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        // Yêu cầu xác thực bằng cửa sổ popup bị hủy
        // Xử lý tương ứng, ví dụ: thông báo cho người dùng
      } else {
        // Xử lý lỗi khác
      }
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, githubProvider);
      if (data) {
        const { isNewUser } = getAdditionalUserInfo(data);
        if (isNewUser) {
          addDocument("users", {
            fullName: data.user.displayName,
            email: data.user.email,
            avatar: data.user.photoURL ? data.user.photoURL : avatarDefault,
            photoCover:
              "https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png",
            uid: data.user.uid,
            providerId: data.providerId,
            keywords: generateKeywords(data.user.displayName.toLowerCase()),
          });
        }
      }
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        // Yêu cầu xác thực bằng cửa sổ popup bị hủy
        // Xử lý tương ứng, ví dụ: thông báo cho người dùng
      } else {
        // Xử lý lỗi khác
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <div className="login">
          <div className="login-container">
            {loginWay ? (
              <>{renderLoginWay()}</>
            ) : (
              <>
                <div className="login-header">
                  <img
                    src={require('assets/f8-logo.png')}
                    alt=""
                    onClick={() => navigate(ROUTES.USER.HOME)}
                  />
                  <h1>Chào mừng đến với F8</h1>
                </div>
                <div className="login-content">
                  <ul className="list">
                    <li className="item">
                      <button
                        className="--btn-default btn-custome"
                        onClick={() => setLoginWay("email")}
                      >
                        <img
                          src={require('assets/Sample_User_Icon.png')}
                          alt=""
                        />
                        <span>Sử dụng email/ số điện thoại</span>
                      </button>
                    </li>
                    <li className="item">
                      <button
                        className="--btn-default btn-custome "
                        onClick={() => handleGoogleSignIn()}
                      >
                        <img
                          src={require('assets/Google_Icons-09-512.webp')}
                          alt=""
                        />
                        <span>Tiếp tục với Google</span>
                      </button>
                    </li>
                    <li className="item">
                      <button
                        className="--btn-default btn-custome "
                        onClick={() => handleGithubSignIn()}
                      >
                        <img
                          src={require('assets/25231.png')}
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
                      to={ROUTES.REGISTER}
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>{" "}
              </>
            )}

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
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
