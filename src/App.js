import { Route, Routes } from "react-router-dom";
import "./App.css";

import { SinglePage } from "./components/pages/SinglePage";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarMenu } from "./components/NavbarMenu/NavbarMenu";
import { SortMenu } from "./components/SortMenu/SortMenu";
import { Home } from "./components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-main-page-content">
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-post/:id" element={<SinglePage />} />
        </Routes>
        <SortMenu />
      </div>
    </div>
  );
}

export default App;
