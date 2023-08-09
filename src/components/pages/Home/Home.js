import React, { useContext } from "react";
import { Header } from "../../Header";
import "./Home.css";
import { ForumContext } from "../../../context.js/ForumContext";

import { Posts } from "./Posts";

export const Home = () => {
  const {
    state: { forumData },
  } = useContext(ForumContext);

  console.log(forumData, "forumData");

  const convertToLocalTime = (timestamp) => {
    const localTime = new Date(timestamp).toLocaleString();
    return localTime;
  };

  return (
    <div className="home">
      <Header headerName="Latest Posts" />

      <div className="home-feed">
        {forumData?.posts?.map((post) => (
          <Posts post={post} convertToLocalTime={convertToLocalTime} />
        ))}
      </div>
    </div>
  );
};
