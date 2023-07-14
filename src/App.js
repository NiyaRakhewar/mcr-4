import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./LandingPage";
import { Header } from "./Header";
import { Comment } from "./Comment";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comments/:id" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
