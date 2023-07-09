import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import Header from "layouts/user/components/Header";
import { MyContext } from "App";
import { AuthContext } from "Context/AuthProvider";
import { AppContext } from "Context/AppProvider";

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
  const { user } = useContext(AuthContext);

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

  // const accessToken = localStorage.getItem("accessToken");
  // if (!accessToken) {
  //   return <Navigate to={ROUTES.USER.HOME} />;
  // }

  // if (!userInfo?.uid && !isLoading) {
  //   return <Navigate to={ROUTES.USER.HOME} />;
  // }

  if (userInfo === "loading") {
    return (
      <div style={loading}>
        <img
          src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
          alt="zalo"
          style={image}
        />
        <i className="fas fa-spinner fa-spin" style={spinner}></i>
        <span>Đang đăng nhập...</span>
      </div>
    );
  } else if (userInfo === null) {
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
