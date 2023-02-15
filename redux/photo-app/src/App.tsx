import React from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import MainPage from "./features/Photo/pages/Main/MainPage";

const LazyPhoto = React.lazy(() => import("./features/Photo/Photo"));

const App = () => {
  return (
    <div className="photo-app">
      <ul>
        <li>
          <Link to="/photos">Go to photo pages</Link>
        </li>
        <li>
          <Link to="/photos/add">Go to add new photo pages</Link>
        </li>
        <li>
          <Link to="/photos/123">Go to edit photo pages</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Navigate replace to="/photos" />} />

        <Route
          path="photos/*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LazyPhoto />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
