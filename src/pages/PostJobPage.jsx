import React, { useState, useEffect } from "react";
import JobPostForm from "../components/JobPostForm";
import JobList from "../components/JobList";
import { getJobs, saveJob } from "../utils/jobs";

const PostJobPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getJobs());
  }, []);
console.log(getJobs())
  const handlePost = (job) => {
    saveJob(job);
    setJobs(getJobs());
  };
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
      <JobPostForm onPost={handlePost} />
      <JobList jobs={jobs} onDelete={handleDeleteJob}/>
    </div>
  );
};

export default PostJobPage;



