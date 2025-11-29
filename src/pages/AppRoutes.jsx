import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import { CardExtendedPage } from "./CardExtendedPage.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/card/:id" element={<CardExtendedPage />} />
  </Routes>
);

export { AppRoutes };
