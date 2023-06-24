import React, { useState } from "react";
import { FaComment, FaBookmark } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import {
  BsBookmark,
  BsShare,
  BsTriangle,
  BsTriangleFill,
} from "react-icons/bs";
import { PiRocket } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { TbTriangleInvertedFilled, TbTriangleInverted } from "react-icons/tb";
import { forumData } from "./data";

export const LandingPage = () => {
  const [posts, setPosts] = useState(forumData.posts);
  const [sortBy, setSortBy] = useState("latest");

  const [showVote, setShowVote] = useState("");

  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );

    setShowVote("up");
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
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

  const handleSortBy = (type) => {
    setSortBy(type);
    if (type === "latest") {
      setPosts((prevPosts) =>
        [...prevPosts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
    } else if (type === "upvotes") {
      setPosts((prevPosts) =>
        [...prevPosts].sort((a, b) => b.upvotes - a.upvotes)
      );
    }
  };

  const handleComments = (postId) => {
    // Handle opening a separate page with the comments view expanded
    console.log(`Open comments for post with ID: ${postId}`);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-options-outer">
          <div className="sidebar-options-inner">
            <div>
              <AiOutlineHome />
              <p>Home</p>
            </div>
            <div>
              <PiRocket />
              <p>Explore</p>
            </div>
            <div>
              <BsBookmark />
              <p>Bookmarks</p>
            </div>
            <div>
              <CgProfile />
              <p>Profile</p>
            </div>
          </div>
        </div>
        <div className="profile-pic">
          <img src={forumData.picUrl} alt={forumData.name} />
          <div>
            <p>{forumData.name}</p>
            <small> @{forumData.username}</small>
          </div>
        </div>
      </div>
      <div className="main">
        {sortBy === "latest" ? (
          <h2 style={{ alignSelf: "start" }}>Latest</h2>
        ) : (
          <h2 style={{ alignSelf: "start" }}>Most Voted</h2>
        )}
        {posts.map((post) => (
          <div
            key={post.postId}
            className="post"
            onClick={() => handleComments(post.postId)}
          >
            <div className="post-votes">
              <button onClick={() => handleUpvote(post.postId)}>
                {showVote === "up" ? (
                  <BsTriangleFill className="icn" />
                ) : (
                  <BsTriangle className="icn" />
                )}
              </button>
              <span>
                {post.upvotes >= 0 ? `+${post.upvotes}` : `-${post.upvotes}`}
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
                    <FaComment />
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
        ))}
      </div>
      <div className="sort-dropdown">
        <span>Sort By:</span>
        <div className="dropdown">
          <span onClick={() => handleSortBy("latest")}>Latest</span>
          <span onClick={() => handleSortBy("upvotes")}>Most Upvoted</span>
        </div>
      </div>
    </div>
  );
};
