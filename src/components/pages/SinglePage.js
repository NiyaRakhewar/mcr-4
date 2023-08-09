import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ForumContext } from "../../context.js/ForumContext";
import { Posts } from "./Home/Posts";

export const SinglePage = () => {
  const {
    state: { forumData },
  } = useContext(ForumContext);
  const { id } = useParams();

  const singlePost = forumData?.posts?.find(({ postId }) => postId === id);

  const convertToLocalTime = (timestamp) => {
    const localTime = new Date(timestamp).toLocaleString();
    return localTime;
  };
  console.log(singlePost);

  console.log(id);

  return (
    <div className="single-page">
      <Posts post={singlePost} convertToLocalTime={convertToLocalTime} />
    </div>
  );
};
