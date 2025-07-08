import React, { useState, useEffect } from "react";
import { getJobs } from "../utils/jobs";
import JobList from "../components/JobList";

const PublicJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getJobs());
  }, []);
 const handleDeleteJob = (index) => {
  const confirmed = window.confirm("Are you sure you want to delete this job?");
  if (confirmed) {
    setJobs((prev) => {
      const updatedJobs = prev.filter((_, i) => i !== index);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  }
};

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <JobList jobs={jobs} onDelete={handleDeleteJob}/>
    </div>
  );
};

export default PublicJobs;
