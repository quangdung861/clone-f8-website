import react, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";
import "_variables.scss";

// Layout
import UserLayout from "layouts/user/UserLayout";

// Page
import HomePage from "pages/user/HomePage";
import SearchPage from "pages/user/SearchPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.HOME} element={<HomePage />} />
        <Route path={ROUTES.USER.SEARCH} element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
