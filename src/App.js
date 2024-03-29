import { useEffect, createContext, useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "constants/routes";
import "_variables.scss";
import jwtDecode from "jwt-decode";
import "moment/locale/vi";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// Layout
import UserLayout from "layouts/user/UserLayout";
// import LoginLayout from "layouts/LoginLayout";
// import RegisterLayout from "layouts/RegisterLayout";
import AccountLayout from "layouts/AccountLayout";

// Page
import HomePage from "pages/user/HomePage";
import SearchPage from "pages/user/SearchPage";
import LearningPathsPage from "pages/user/LearningPathsPage";
import CoursesPage from "pages/user/CoursePage";
import BlogPage from "pages/user/BlogPage";
import NotFoundPage from "pages/user/NotFoundPage";
import RegisterPage from "pages/user/RegisterPage";
import LoginPage from "pages/user/LoginPage";
import ProfilePage from "pages/user/ProfilePage";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "redux/user/actions";
import AuthProvider from "Context/AuthProvider";
import AppProvider from "Context/AppProvider";
import LoginRegisterLayout from "layouts/LoginRegisterLayout";

export const MyContext = createContext();

function App() {
  AOS.init(
    {
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    }
  );

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [isBoxSearch, setIsBoxSearch] = useState(true);
  const [cssHeader, setCssHeader] = useState({});

  // const { userInfo } = useSelector((state) => state.userReducer);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     const decodeUserData = jwtDecode(accessToken);
  //     dispatch(getUserInfoAction({ id: decodeUserData.sub }));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (userInfo.data.id) {
  //     dispatch(getUserInfoAction({ id: userInfo.data.id }));
  //   }
  // }, [userInfo.data.id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <AuthProvider>
      <AppProvider>
        <MyContext.Provider
          value={{ isBoxSearch, setIsBoxSearch, cssHeader, setCssHeader }}
        >
          <Routes>
            {/* <Route element={<RegisterLayout />}>
            <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
          </Route> */}
            <Route element={<LoginRegisterLayout />}>
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Route>

            <Route element={<AccountLayout />}>
              <Route
                path={ROUTES.USER.ACCOUNT.PROFILE}
                element={<ProfilePage />}
              />
            </Route>

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
            {/* <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} /> */}
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </MyContext.Provider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
