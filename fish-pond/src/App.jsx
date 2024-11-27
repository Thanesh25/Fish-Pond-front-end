import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChartPage from "./Components/ChartPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
