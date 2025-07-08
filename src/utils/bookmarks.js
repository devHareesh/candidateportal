export const getBookmarks = () => {
  const saved = localStorage.getItem("bookmarkedCandidates");
  return saved ? JSON.parse(saved) : [];
};

export const saveBookmark = (candidate) => {
  const bookmarks = getBookmarks();
  if (!bookmarks.find(c => c.id === candidate.id)) {
    bookmarks.push(candidate);
    localStorage.setItem("bookmarkedCandidates", JSON.stringify(bookmarks));
  }
};

export const removeBookmark = (id) => {
  const bookmarks = getBookmarks().filter(c => c.id !== id);
  localStorage.setItem("bookmarkedCandidates", JSON.stringify(bookmarks));
};
