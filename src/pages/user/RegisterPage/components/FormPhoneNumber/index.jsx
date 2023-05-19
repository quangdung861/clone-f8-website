import React, { useEffect, useState } from "react";

import { API } from "constants/api";

import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";

import * as S from "./styles";

const FormPhoneNumber = ({
  setRegisterWay,
  dropdownContries,
  setDropdownContries,
}) => {
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
      <div className="register-container">
        <form name="register-form-phone-number" id="register-form-phone-number">
          <div style={{ fontWeight: "500", margin: "0px 8px 8px 8px" }}>
            Tên của bạn?
          </div>
          <div className="box-fullName">
            <input
              type="text"
              placeholder="Họ và tên của bạn"
              name="fullName"
              className="fullName"
              required
              maxLength="32"
            />
          </div>
          <div className="error-fullname"></div>
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
            <span>Số điện thoại</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setRegisterWay("email")}
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
              placeholder="Nhập mã xác minh"
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
        <div style={{ color: "#35414c", margin: "16px", textAlign: "center" }}>
          Bạn đã có tài khoản?{" "}
          <Link
            style={{ color: "#f05123", fontWeight: 500 }}
            to={ROUTES.USER.LOGIN}
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default FormPhoneNumber;
