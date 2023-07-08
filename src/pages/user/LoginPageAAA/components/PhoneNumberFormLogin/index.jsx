import React, { useEffect, useState } from "react";

import { API } from "constants/api";
import { useNavigate, Link } from "react-router-dom";

import * as S from "./styles";

import { ROUTES } from "constants/routes";

const PhoneNumberFormLogin = ({
  setLoginWay,
  dropdownContries,
  setDropdownContries,
}) => {
  const navigate = useNavigate();

  const [contriesList, setContriesList] = useState();
  const [countriesValue, setCountriesValue] = useState("+84");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getContriesList(keyword);
  }, [keyword]);

  const getContriesList = (keyword) => {
    fetch(`${API}/countries?q=${keyword}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setContriesList(res);
      });
  };

  const renderContriesList = () => {
    return contriesList.map((item, index) => {
      return (
        <li
          className="countries-item"
          key={index}
          onClick={() => {
            setCountriesValue(item.code);
            setDropdownContries(false);
            setKeyword("");
          }}
        >
          <div>
            {item.name} {item.code}
          </div>
        </li>
      );
    });
  };

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
        <form name="register-form-phone-number" id="register-form-phone-number">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "500",
              margin: "16px 8px 8px 8px",
            }}
          >
            <span>Số điện thoại</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setLoginWay("email")}
            >
              Đăng ký với email
            </span>
          </div>
          <div className="box-phoneNumber">
            <div
              className="first-number"
              onClick={() => setDropdownContries(!dropdownContries)}
            >
              {countriesValue} <i className="fa-solid fa-chevron-down"></i>
            </div>

            <input
              type="number"
              placeholder="Số điện thoại"
              name="phoneNumber"
              className="phoneNumber"
              maxLength="20"
            />
          </div>
          {dropdownContries && (
            <div className="countries-dropdown">
              <div className="countries-search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <ul className="countries-list">{renderContriesList()}</ul>
            </div>
          )}
          <div className="box-confirm">
            <input
              type="text"
              className="confirm"
              placeholder="Nhập mã xác nhận"
              disabled
              autoComplete="off"
            />
            <div className="btn-sendCode">Gửi mã</div>
          </div>

          {/*  */}
          <button className="btn-submit" type="button" onClick={() => {}}>
            Đăng ký
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

export default PhoneNumberFormLogin;
