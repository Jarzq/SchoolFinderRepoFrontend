import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SubPage1 from "./pages/CalculatorPage";
import SubPage2 from "./pages/ListPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calculatorPage" element={<SubPage1 />} />
          <Route path="/listPage" element={<SubPage2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
