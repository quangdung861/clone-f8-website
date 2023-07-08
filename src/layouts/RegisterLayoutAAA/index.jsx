import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTES } from "constants/routes";

const RegisterLayout = () => {

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return <Navigate to={ROUTES.USER.HOME} />;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
};

export default RegisterLayout;
