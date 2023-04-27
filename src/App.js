import "./App.css";

import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import UserLayout from "./layouts/user/UserLayout";
import HomePage from "./pages/user/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
