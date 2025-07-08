import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateDetail from "../components/CandidateDetail";

const CandidatePage = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    fetch("/candidates.json")
      .then((res) => res.json())
      .then((data) => {
        setCandidate(data.find((c) => c.id === parseInt(id)));
      });
  }, [id]);

  if (!candidate) return <p>Candidate not found.</p>;

  return <CandidateDetail candidate={candidate} />;
};

export default CandidatePage;
