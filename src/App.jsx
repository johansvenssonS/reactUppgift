import { useState } from "react";

import "./App.css";
import FloatingSidebar from "./components/FloatingSidebar";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserPage from "./pages/UserPage";
import MapPage from "./pages/MapPage";
import SingleUserPage from "./pages/SingleUserPage";
function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full h-screen  bg-gray-300 ">
        {/* Sidebar */}
        <FloatingSidebar></FloatingSidebar>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/users" element={<UserPage />}></Route>
          <Route path="/users/:userId" element={<SingleUserPage />}></Route>
          <Route path="/map" element={<MapPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
