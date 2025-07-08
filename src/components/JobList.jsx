import React from "react";

const JobList = ({ jobs, onDelete }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {jobs.length === 0 ? (
      <p>No jobs posted yet.</p>
    ) : (
      jobs.map((job, index) => (
        <div
          key={index}
          className="border p-4 rounded shadow bg-white flex flex-col gap-2"
        >
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-700">{job.description}</p>
          <p className="text-gray-700">{job.type}</p>
          <p className="text-gray-700">{job.location}</p>
          <p className="text-gray-700">{job.salary}</p>
          <button
            onClick={() => onDelete(index)}
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))
    )}
  </div>
);

export default JobList;
