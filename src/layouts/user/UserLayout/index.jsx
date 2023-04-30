import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import * as S from "./styles";

const UserLayout = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <Sidebar />
        <Outlet />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default UserLayout;
