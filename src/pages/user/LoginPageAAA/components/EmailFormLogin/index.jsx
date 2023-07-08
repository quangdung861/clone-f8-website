import React, { useState } from "react";

import * as S from "./styles";

import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "constants/routes";

import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "redux/user/actions";

const EmailFormLogin = ({ setLoginWay, loginWay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userReducer);

  const [formData, setFormData] = useState({
    email: {
      value: undefined,
    },
    password: {
      value: undefined,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        value: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.value && formData.email.value) {
      dispatch(
        loginAction({
          email: formData.email.value,
          password: formData.password.value,
        })
      );
    } else {
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.password.value && formData.email.value) {
  //     // Nơi gán biến loading
  //     const callAPI = new Promise((resolve, reject) => {
  //       axios
  //         .post("http://localhost:4000/login", {
  //           email: formData.email.value,
  //           password: formData.password.value,
  //         })
  //         .then((response) => {
  //           // Resolve Promise với dữ liệu nhận được
  //           // Nơi gán biến loading
  //           resolve(response.data);
  //         })
  //         .catch((error) => {
  //           // Reject Promise với lỗi
  //           reject(error);
  //         });
  //     });

  //     // Sử dụng hàm callAPI để gọi API
  //     callAPI
  //       .then((data) => {
  //         // Xử lý dữ liệu nhận được từ API
  //         console.log(data);
  //         setFormData((prevData) => ({
  //           ...prevData,
  //           error: "",
  //         }));
  //       })
  //       .catch((error) => {
  //         // Xử lý lỗi nếu có
  //         if (error.response.status === 400) {
  //           setFormData((prevData) => ({
  //             ...prevData,
  //             password: {
  //               ...prevData.password,
  //             },
  //             error: "Email hoặc mật khẩu không chính xác",
  //           }));
  //         }
  //       });
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       password: {
  //         ...prevData.password,
  //       },
  //       error: "Email hoặc mật khẩu không chính xác",
  //     }));
  //   }
  // };

  return (
    <S.Wrapper>
      <div className="btn-back">
        <i
          className="fa-solid fa-chevron-left"
          style={{
            fontSize: "20px",
            cursor: "pointer",
            padding: "16px 24px 16px 0px",
          }}
          onClick={() => setLoginWay("")}
        ></i>
      </div>
      <div className="register-container">
        <div className="login-header">
          <img
            src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
            alt=""
            onClick={() => navigate(ROUTES.USER.HOME)}
          />
          <h1>Đăng nhập vào F8</h1>
        </div>
        <form
          name="register-form-email"
          id="register-form-email"
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "500",
              margin: "16px 8px 8px 8px",
            }}
          >
            <span>Email</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setLoginWay("phoneNumber")}
            >
              Đăng nhập với SĐT
            </span>
          </div>

          <div className="box-email">
            <input
              type="text"
              placeholder="Địa chỉ email"
              name="email"
              className="email"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="box-password">
            <input
              type="password"
              placeholder="Mật khẩu"
              name="password"
              className="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="error-fullname">{userInfo.error}</div>

          <div
            style={{
              margin: "8px 0px 20px 8px",
              fontSize: "12px",
              color: "#6b6f74",
            }}
          >
            Gợi ý: Mật khẩu cần có ít nhất 8 ký tự
          </div>

          <div className="box-confirm">
            <input
              type="text"
              className="confirm"
              placeholder="Nhập mã xác minh"
              disabled
              autoComplete="off"
            />
            <div className="btn-sendCode">Gửi mã</div>
          </div>

          {/*  */}
          <button
            className={
              !formData.password.value || !formData.email.value
                ? "btn-submit"
                : "btn-submit btn-submit--active"
            }
            type="submit"
          >
            Đăng nhập
          </button>
        </form>
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
    </S.Wrapper>
  );
};

export default EmailFormLogin;
