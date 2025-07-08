import React from "react";
import { Link } from "react-router-dom";
import { saveBookmark } from "../utils/bookmarks";

const CandidateCard = ({ candidate }) => (
  <div className="border p-4 rounded shadow hover:shadow-md transition">
    <h2 className="text-xl font-semibold">{candidate.name}</h2>
    <p className="text-gray-600">{candidate.branch}, Batch {candidate.batch}</p>
    <p className="text-sm">Skills: {candidate.skills.join(", ")}</p>
    <div className="mt-2 flex gap-4">
      <Link to={`/candidate/${candidate.id}`} className="text-blue-500 underline">View Profile</Link>
      <button onClick={() => saveBookmark(candidate)} className="text-green-600 underline" style={{ marginLeft: "20px" }}>Bookmark</button>
    </div>
  </div>
);

export default CandidateCard;
