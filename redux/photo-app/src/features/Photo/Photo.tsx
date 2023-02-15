import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import AddEditPage from "./pages/AddEdit/AddEditPage";
import MainPage from "./pages/Main/MainPage";

const Photo = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddEditPage />} />
      <Route path="/:photoId" element={<AddEditPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Photo;
