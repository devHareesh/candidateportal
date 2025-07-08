import React, { useState } from "react";

const JobPostForm = ({ onPost }) => {
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in the job title and description.");
      return;
    }
    const newJob = {
      id: Date.now(),
      title,
      description,
      location,
      salary,
      type,
    };
    onPost(newJob);
    setTitle("");
    setDescription("");
    setLocation("");
    setSalary("");
    setType("");
  };

  return (
   <div className="form-container">
      <h1>Post a New Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Package</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Job Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group full-width">
          <button type="submit">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
