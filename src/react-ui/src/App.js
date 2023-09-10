import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/team/:teamName" element={<TeamPage />} />
        <Route path="/team/:teamName/match/:year" element={<MatchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
