import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { DashboardPage } from "./Pages/DashboardPage";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<DashboardPage/>}/>
    </Routes>

    </div>
  );
}

export default App;
