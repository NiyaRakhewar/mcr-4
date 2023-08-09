import React, { useContext } from "react";
import "./navbarMenu.css";
import { ForumContext } from "../../context.js/ForumContext";
import { AiOutlineHome } from "react-icons/ai";
import { BsRocket } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const NavbarMenu = () => {
  const {
    state: { forumData },
  } = useContext(ForumContext);

  const navigate = useNavigate();
  return (
    <div className="navbar-menu">
      <div className="navbar-menu-container">
        <div className="navigation-content">
          <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <b>
              <AiOutlineHome />
            </b>
            Home
          </p>
          <p>
            <b>
              <BsRocket />
            </b>
            Explore
          </p>
          <p>
            <b>
              <FiBookmark />
            </b>
            Bookmarks
          </p>
          <p>
            <b>
              <CgProfile />
            </b>
            Profile
          </p>
        </div>
        <div className="navbar-menu-profile">
          <div to={`/profile`} className="profile-link">
            <div className="avatar-image">
              <img
                src={forumData.picUrl}
                alt="User Avatar"
                className="avatar"
              />
            </div>
            <div className="post-user-name">
              <p className="user-fullname">{forumData.name}</p>
              <p className="user-username">@{forumData.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
