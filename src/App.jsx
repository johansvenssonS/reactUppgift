import { useState } from "react";

import "./App.css";
import FloatingSidebar from "./components/FloatingSidebar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import MapPage from "./pages/MapPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full h-screen  bg-gray-300 ">
      {/* Sidebar */}
      <FloatingSidebar></FloatingSidebar>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users" element={<UserPage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
