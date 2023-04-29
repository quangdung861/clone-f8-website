import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routes";
import UserLayout from "layouts/user/UserLayout";
import HomePage from "pages/user/HomePage";
import SearchPage from "pages/user/SearchPage";

function App() {
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
