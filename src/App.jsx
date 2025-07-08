import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CandidatePage from "./pages/CandidatePage";
import PostJobPage from "./pages/PostJobPage";
import PublicJobs from "./pages/PublicJobs";
import { NavLink } from "react-router-dom";
import './index.css';
const App = () => (
  <Router>
<nav className="custom-navbar">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `nav-link ${isActive ? "active" : ""}`
    }
    end
  >
    Candidates
  </NavLink><br />

  <NavLink
    to="/jobs"
    className={({ isActive }) =>
      `nav-link ${isActive ? "active" : ""}`
    }
  >
    Job Openings
  </NavLink><br />

  <NavLink
    to="/post-job"
    className={({ isActive }) =>
      `nav-link ${isActive ? "active" : ""}`
    }
  >
    Post Job
  </NavLink><br />
</nav>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidate/:id" element={<CandidatePage />} />
      <Route path="/post-job" element={<PostJobPage />} />
      <Route path="/jobs" element={<PublicJobs />} />
    </Routes>
  </Router>
);

export default App;
