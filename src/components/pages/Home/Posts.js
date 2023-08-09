import React, { useState } from "react";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { TbTriangleFilled, TbTriangleInverted } from "react-icons/tb";

export const Posts = ({ post, convertToLocalTime }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);
  const [upvotes, setUpvotes] = useState(post.upvotes);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setUpvotes(upvotes - 1);
  };

  return (
    <div className="home-user-feed" key={post.id}>
      <div className="user-feed">
        <div style={{ fontSize: "2rem" }}>
          <TbTriangleFilled
            style={{ color: "#584dc8" }}
            onClick={handleUpvote}
          />
          <div style={{ fontSize: "1.5rem" }}>{upvotes}</div>
          <TbTriangleInverted
            style={{ color: "grey" }}
            onClick={handleDownvote}
          />
        </div>

        <div className="user-feed-details">
          <div className="user-feed-posted-by">
            <img src={post.picUrl} alt="" />
            <p className="username">
              <span className="posted-by-name">Posted by:</span> @
              {post.username}
            </p>
            <p className="time">{convertToLocalTime(post.createdAt)}</p>
          </div>
          <div className="user-feed-post-details">
            <div>
              <h2>{post.post}</h2>
            </div>
            <div className="feed-tag">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="feed-description">
              <p>{post.postDescription}</p>
            </div>
            <div className="feed-btn">
              <div
                className="comment"
                onClick={() => navigate(`/single-post/${post.postId}`)}
              >
                <BiComment style={{ cursor: "pointer" }} />
              </div>

              <FiShare2 />

              {toggle ? (
                <BsBookmarkFill onClick={() => setToggle(false)} />
              ) : (
                <BsBookmark onClick={() => setToggle(true)} />
              )}
            </div>

            {location.pathname === `/single-post/${post.postId}` ? (
              <div>
                <hr />
                {post.comments.map((comment) => (
                  <div>
                    <div key={comment.id} className="user-feed-posted-by">
                      <img src={comment.picUrl} alt="" />
                      <p className="username">
                        <span className="posted-by-name">Posted by:</span> @
                        {comment.username}
                      </p>

                      <p className="time">
                        {convertToLocalTime(comment.createdAt)}
                      </p>
                    </div>
                    <div>
                      <div>
                        <p style={{ margin: "10px", fontSize: "1.5rem" }}>
                          {comment.comment}
                        </p>
                      </div>
                      <div className="feed-btn">
                        <AiOutlineHeart />
                        {commentToggle ? (
                          <BsBookmarkFill
                            onClick={() => setCommentToggle(false)}
                          />
                        ) : (
                          <BsBookmark onClick={() => setCommentToggle(true)} />
                        )}

                        <FiShare2 />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
