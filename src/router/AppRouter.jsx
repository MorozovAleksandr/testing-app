import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import Users from "../pages/UsersPage/Users";
import UsersDeatailsPage from "../pages/UsersDeatailsPage/UsersDeatailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HelloPage from "../pages/HelloPage/HelloPage";
import UsersForTest from "../pages/UsersForTest/UsersForTest";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/hello" element={<HelloPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users-test" element={<UsersForTest />} />
      <Route path="/users/:id" element={<UsersDeatailsPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
