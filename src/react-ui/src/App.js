import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/team/:teamName" element={<TeamPage />} />
        <Route path="/team/:teamName/match/:year" element={<MatchPage />} />
        <Route path="/team/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
