import { Link, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import "./App.css";
import Users from "./pages/UsersPage/Users";
import UsersDeatailsPage from "./pages/UsersDeatailsPage/UsersDeatailsPage";

import "./App.css";

const App = () => {
  return (
    <>
      <div className={"links"}>
        <Link className={"link"} to="/" data-testid="main-link">
          main
        </Link>
        <Link className={"link"} to="about" data-testid="about-link">
          about
        </Link>
        <Link className={"link"} to="users" data-testid="users-link">
          users
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDeatailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
