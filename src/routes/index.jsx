import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ArticleDetails from "../pages/ArticleDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article-details/:id" element={<ArticleDetails />} />
    </Routes>
  );
};

export default Routers;
