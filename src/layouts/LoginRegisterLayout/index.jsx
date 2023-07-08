import React, { useEffect } from "react";

import * as S from "./styles";

import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "firebaseConfig";
import { ROUTES } from "constants/routes";

const LoginRegisterLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate(ROUTES.USER.HOME);
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginRegisterLayout;
