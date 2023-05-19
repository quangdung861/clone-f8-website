import React, { useEffect, useState } from "react";

import * as S from "./styles";

import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";

import axios from "axios";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const FormEmail = ({ setRegisterWay }) => {
  const [formData, setFormData] = useState({
    fullName: {
      value: undefined,
      error: "",
    },
    email: {
      value: undefined,
      error: "",
    },
    password: {
      value: undefined,
      error: "",
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

  useEffect(() => {
    if (formData.fullName.value === "") {
      setFormData((prevData) => ({
        ...prevData,
        fullName: {
          ...prevData.fullName,
          error: "Tên của bạn không hợp lệ",
        },
      }));
    }

    if (formData.fullName.value) {
      setFormData((prevData) => ({
        ...prevData,
        fullName: {
          ...prevData.fullName,
          error: "",
        },
      }));
    }
  }, [formData.fullName.value]);

  useEffect(() => {
    if (formData.email.value === "") {
      setFormData((prevData) => ({
        ...prevData,
        email: {
          ...prevData.email,
          error: "Email của bạn không hợp lệ",
        },
      }));
    }
    if (formData.email.value) {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(formData.email.value)) {
        setFormData((prevData) => ({
          ...prevData,
          email: {
            ...prevData.email,
            error: "Email của bạn không đúng định dạng",
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          email: {
            ...prevData.email,
            error: "",
          },
        }));
      }
    }
  }, [formData.email.value]);

  useEffect(() => {
    if (formData.password.value === "") {
      setFormData((prevData) => ({
        ...prevData,
        password: {
          ...prevData.password,
          error: "Mật khẩu của bạn không hợp lệ",
        },
      }));
    }

    if (formData.password.value) {
      setFormData((prevData) => ({
        ...prevData,
        password: {
          ...prevData.password,
          error: "",
        },
      }));
    }
  }, [formData.password.value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName.error &&
      !formData.email.error &&
      !formData.password.error &&
      formData.fullName.value &&
      formData.email.value &&
      formData.password.value &&
      formData.password.value?.length >= 8
    ) {
      createRegister();
    } else {
      if (formData.password.value === undefined) {
        setFormData((prevData) => ({
          ...prevData,
          password: {
            ...prevData.password,
            error: "Mật khẩu của bạn không hợp lệ",
          },
        }));
      }

      if (formData.email.value === undefined) {
        setFormData((prevData) => ({
          ...prevData,
          email: {
            ...prevData.email,
            error: "Email của bạn không hợp lệ",
          },
        }));
      }
      if (formData.fullName.value === undefined) {
        setFormData((prevData) => ({
          ...prevData,
          fullName: {
            ...prevData.fullName,
            error: "Tên của bạn không hợp lệ",
          },
        }));
      }
      if (formData.password.value?.length <= 8) {
        setFormData((prevData) => ({
          ...prevData,
          password: {
            ...prevData.password,
            error: "Mật khẩu cần có ít nhất 8 ký tự",
          },
        }));
      }
    }
  };

  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  async function createRegister() {
    // fetch(`${API}/register`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     fullName: formData.fullName.value,
    //     email: formData.email.value,
    //     password: formData.password.value,
    //   }),
    //   headers: myHeaders,
    // }).then((res) => res.json()).then((res) => console.log(res));

    try {
      const result = await axios.post("http://localhost:4000/register", {
        fullName: formData.fullName.value,
        email: formData.email.value,
        password: formData.password.value,
        role: "user",
        images: {
          cover: {
            url: "https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png",
          },
          avatar: {
            url: "https://dvdn247.net/wp-content/uploads/2020/07/avatar-mac-dinh-1.png",
          },
        },
      });
      if (result.data) {
        setIsRegisterSuccess(true);
      }
    } catch (error) {
      if (error.response.status === 400) {
        setFormData((prevData) => ({
          ...prevData,
          email: {
            ...prevData.email,
            error: "Email của bạn đã tồn tại",
          },
        }));
      }
    }
  }

  return (
    <S.Wrapper>
      <div className="register-container">
        {!isRegisterSuccess ? (
          <>
            <form
              name="register-form-email"
              id="register-form-email"
              onSubmit={handleSubmit}
            >
              <div style={{ fontWeight: "500", margin: "0px 8px 8px 8px" }}>
                Tên của bạn?
              </div>
              <div className="box-fullName">
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  name="fullName"
                  className="fullName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="error-fullname">{formData.fullName.error}</div>
              {/*  */}

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
                  onClick={() => setRegisterWay("phoneNumber")}
                >
                  Đăng ký với SĐT
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
              <div className="error-fullname error-fullname--custome">
                {formData.email.error}
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
              <div className="error-fullname">{formData.password.error}</div>

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
              <button className="btn-submit btn-submit--active" type="submit">
                Đăng ký
              </button>
            </form>
            <div
              style={{ color: "#35414c", margin: "16px", textAlign: "center" }}
            >
              Bạn đã có tài khoản?{" "}
              <Link
                style={{ color: "#f05123", fontWeight: 500 }}
                to={ROUTES.USER.LOGIN}
              >
                Đăng nhập
              </Link>
            </div>
          </>
        ) : (
          <div className="register-success">
            <i className="fa-regular fa-circle-check"></i>
            <div className="register-success-title">
              Đăng ký tài khoản thành công{" "}
              <span>
                <Link to={ROUTES.USER.LOGIN}>Đăng nhập</Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </S.Wrapper>
  );
};

export default FormEmail;
