import React from "react";

const CandidateDetail = ({ candidate }) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">{candidate.name}</h1>
    <p>{candidate.branch}, Batch {candidate.batch}, {candidate.college}</p>
    <p>Skills: {candidate.skills.join(", ")}</p>
    <div className="mt-4 space-x-4">
      <a href={candidate.resume} target="_blank" className="text-blue-500 underline">Resume</a>
      <a href={candidate.github} target="_blank" className="text-gray-700 underline">GitHub</a>
      <a href={candidate.linkedin} target="_blank" className="text-blue-700 underline">LinkedIn</a>
    </div>
  </div>
);

export default CandidateDetail;
