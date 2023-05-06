import { useEffect, createContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";
import "_variables.scss";

// Layout
import UserLayout from "layouts/user/UserLayout";

// Page
import HomePage from "pages/user/HomePage";
import SearchPage from "pages/user/SearchPage";
import LearningPathsPage from "pages/user/LearningPathsPage";
import CoursesPage from "pages/user/CoursePage";
import BlogPage from "pages/user/BlogPage";

export const MyContext = createContext();

function App() {
  const { pathname } = useLocation();

  const [isBoxSearch, setIsBoxSearch] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <MyContext.Provider value={{ isBoxSearch, setIsBoxSearch }}>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER.SEARCH} element={<SearchPage />} />
          <Route
            path={ROUTES.USER.LEARNING_PATHS}
            element={<LearningPathsPage />}
          />
          <Route path={ROUTES.USER.COURSES} element={<CoursesPage />} />
          <Route path={ROUTES.USER.BLOG} element={<BlogPage />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
