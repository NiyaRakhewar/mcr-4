import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./LandingPage";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
