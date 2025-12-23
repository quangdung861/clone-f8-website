import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import Header from "layouts/user/components/Header";
import { MyContext } from "App";
import { AuthContext } from "Context/AuthProvider";
import { AppContext } from "Context/AppProvider";
import f8_icon from "../../assets/f8-logo.png";

const loading = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "450px",
  flexDirection: "column",
};

const spinner = {
  fontSize: "30px",
  color: "#007bff",
  marginBottom: "24px",
};

const image = {
  width: "100px",
  objectFit: "cover",
  marginBottom: "150px",
  borderRadius: "8px",
};

const AccountLayout = () => {
  const { setIsBoxSearch, setCssHeader } = useContext(MyContext);
  const { userInfo } = useContext(AppContext);
  console.log("🚀 ~ file: index.jsx:35 ~ AccountLayout ~ userInfo:", userInfo);

  useEffect(() => {
    setIsBoxSearch(false);
    setCssHeader({
      backgroundColor: "transparent",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      borderBottom: "none",
    });
    return () => {
      setIsBoxSearch(true);
      setCssHeader({});
    };
  }, []);

  if (userInfo.loading === true) {
    return (
      <div style={loading}>
        <img
          src={f8_icon}
          alt="f8-icon"
          style={image}
        />
        <i className="fas fa-spinner fa-spin" style={spinner}></i>
        <span>Đang đăng nhập...</span>
      </div>
    );
  } else if (userInfo.loading === false && !userInfo.data.uid) {
    return <Navigate to={ROUTES.USER.HOME} />;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
};

export default AccountLayout;
