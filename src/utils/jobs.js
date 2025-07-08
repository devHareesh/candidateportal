export const getJobs = () => {
  const saved = localStorage.getItem("jobs");
  return saved ? JSON.parse(saved) : [];
};

export const saveJob = (job) => {
  const current = getJobs();
  const updated = [...current, job];
  localStorage.setItem("jobs", JSON.stringify(updated));
};
