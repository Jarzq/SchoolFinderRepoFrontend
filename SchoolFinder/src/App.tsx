import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SubPage1 from "./pages/SubPage1";
import SubPage2 from "./pages/SubPage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subpage1" element={<SubPage1 />} />
        <Route path="/subpage2" element={<SubPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
