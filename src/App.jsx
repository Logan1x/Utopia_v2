import "./styles/global.css";

import { Nav, Footer } from "./components";
import { Routes } from "./routes";

function App() {
  return (
    <div className="container-main">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
