import React, { useState } from "react";

import * as S from "./styles";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useNavigate } from "react-router-dom";
import FormEmail from "./components/FormEmail";
import { auth, githubProvider, googleProvider } from "firebaseConfig";
import {
  signInWithPopup,
  getAdditionalUserInfo,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addDocument, generateKeywords } from "services";
import { serverTimestamp } from "firebase/firestore";
import avatarDefault from "assets/avatar-mac-dinh-1.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [registerWay, setRegisterWay] = useState("");

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

  const renderRegisterWay = () => {
    switch (registerWay) {
      case "email":
        return (
          <FormEmail
            setRegisterWay={setRegisterWay}
            registerWay={registerWay}
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
              <h1>Chào mừng đến với F8</h1>
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
                        className="--btn-default btn-custome "
                        onClick={handleGoogleSignIn}
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
                        className="--btn-default btn-custome "
                        onClick={handleGithubSignIn}
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
                      to={ROUTES.LOGIN}
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
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
