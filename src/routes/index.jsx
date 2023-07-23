import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ArticleDetails from "../pages/ArticleDetails";
import SignUp from "../pages/Registration/SignUp";
import Login from "../pages/Registration/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article-details/:id" element={<ArticleDetails />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
