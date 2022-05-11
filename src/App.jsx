import "./styles/global.css";

import { Nav, Footer } from "./components";
import { Home, Themes } from "./pages";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
