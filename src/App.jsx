import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CandidatePage from "./pages/CandidatePage";
import PostJobPage from "./pages/PostJobPage";
import PublicJobs from "./pages/PublicJobs";

const App = () => (
  <Router>
   <nav className="bg-black text-white py-4 flex justify-center gap-12 text-lg font-medium shadow"
>
  <Link to="/" className="hover:underline">Candidates</Link><br></br>
  
  <Link to="/jobs" className="hover:underline">Job Openings</Link><br></br>
  <Link to="/post-job" className="hover:underline">Post Job</Link><br></br>
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
