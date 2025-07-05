import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Joke from "./components/Joke";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/haha" element={<Joke />} />
      </Routes>
    </Router>
  );
}

export default App;
