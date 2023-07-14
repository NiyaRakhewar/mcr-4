import React, { useState } from "react";
import { forumData } from "./data";
import { useParams } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { BsArrowLeft } from "react-icons/bs";
import { FaBookmark, FaComment } from "react-icons/fa";
import { BsShare, BsTriangle, BsTriangleFill } from "react-icons/bs";
import { TbTriangleInvertedFilled, TbTriangleInverted } from "react-icons/tb";

import { useNavigate } from "react-router-dom";
export const Comment = ({ post }) => {
  const { id } = useParams();

  const [posts, setPosts] = useState(forumData.posts);
  //   const [sortBy, setSortBy] = useState("latest");

  const [showVote, setShowVote] = useState("up");

  const navigate = useNavigate();

  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts?.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );

    setShowVote("up");
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts?.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post
      )
    );

    setShowVote("down");
  };

  const handleBookmark = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  return (
    <div>
      <Sidebar forumData={forumData} />
      <div className="main">
        <h2>
          <BsArrowLeft /> Post
        </h2>
        <div key={post.postId} className="post">
          <div className="post-votes">
            <button onClick={() => handleUpvote(post.postId)}>
              {showVote === "up" ? (
                <BsTriangleFill className="icn" />
              ) : (
                <BsTriangle className="icn" />
              )}
            </button>
            <span>
              {/* {post.upvotes >= 0 ? `+${post.upvotes}` : `-${post.upvotes}`} */}
            </span>
            <button onClick={() => handleDownvote(post.postId)}>
              {showVote === "down" ? (
                <TbTriangleInvertedFilled className="icn" />
              ) : (
                <TbTriangleInverted className="icn" />
              )}
            </button>
          </div>
          <div className="post-side">
            <div className="post-header">
              <img src={post.picUrl} alt={post.name} />
              <div>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.2rem",
                    color: "rgb(109, 22, 176)",
                  }}
                >
                  <p style={{ color: "grey" }}>Posted by </p> @{post.username}
                </p>
              </div>
            </div>
            <div className="post-content">
              <h3>{post.post}</h3>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <div key={index} className="tag-pill">
                    {tag}
                  </div>
                ))}
              </div>
              <p>{post.postDescription}</p>
              <hr />
              <div className="post-options">
                <span className="comment-icon">
                  <FaComment
                    onClick={() => navigate(`/comments/${post.postId}`)}
                  />
                </span>
                <span className="comment-icon">
                  <BsShare />
                </span>
                <span
                  className={`bookmark-icon ${
                    post.isBookmarked ? "bookmarked" : ""
                  }`}
                  onClick={() => handleBookmark(post.postId)}
                >
                  <FaBookmark />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
