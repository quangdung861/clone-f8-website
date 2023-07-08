import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import Header from "layouts/user/components/Header";
import { MyContext } from "App";
import { AuthContext } from "Context/AuthProvider";

const AccountLayout = () => {
  const { setIsBoxSearch, setCssHeader } = useContext(MyContext);
  const { userInfo } = useContext(AuthContext);
  console.log("🚀 ~ file: index.jsx:13 ~ AccountLayout ~ userInfo:", userInfo)
  
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

  if (!userInfo.uid) {
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
