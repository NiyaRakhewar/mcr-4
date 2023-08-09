import React, { useContext } from "react";
import { ForumContext } from "../../context.js/ForumContext";
import "./SortMenu.css";

export const SortMenu = () => {
  const { dispatch } = useContext(ForumContext);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "date") {
      dispatch({ type: "SORT_BY_DATE_CREATED" });
    } else if (selectedOption === "upvotes") {
      dispatch({ type: "SORT_BY_UPVOTES" });
    }
  };

  return (
    <div className="sort-menu">
      <select onChange={handleSortChange}>
        <option value="date">Latest Posts</option>
        <option value="upvotes">Most Upvoted</option>
      </select>
    </div>
  );
};
