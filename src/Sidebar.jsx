import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiRocket } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { forumData } from "./data";
export const Sidebar = ({ forumData }) => {
  return (
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
        <img src={forumData?.picUrl} alt={forumData?.name} />
        <div>
          <p>{forumData?.name}</p>
          <small> @{forumData?.username}</small>
        </div>
      </div>
    </div>
  );
};
