import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

//....Routes...
import Landing from "./components/Landing";
import Personal from "./components/Personal";
import Polling from "./components/Polling";
import Communal from "./components/Communal";

import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Polling" element={<Polling />} />
          <Route path="/Communal" element={<Communal />} />
          <Route path="/Personal" element={<Personal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
