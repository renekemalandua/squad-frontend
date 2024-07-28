import React, { useState } from 'react'
import "./post.scss"

import { FavoriteBorderOutlined } from "@mui/icons-material";
import { FavoriteOutlined } from "@mui/icons-material";
import { TextsmsOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";

import { Link } from "react-router-dom";
import Comments from '../comments/comments';

function Post({ post }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)
  const liked = false;

  return (
    <div className='post'>
      <div className="container">
        <div className='user'>
          <div className="userInfo">
            <img src={post.photo} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className='interact'>
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 Likes
          </div>
          <div className="item" onClick={()=> setIsCommentsOpen(!isCommentsOpen)}>
            <TextsmsOutlined />
            10 Comentarios
          </div>
          <div className="item">
            <ShareOutlined />
            8 Partilhas
          </div>
        </div>
        {isCommentsOpen && (<Comments/>)}
      </div>
    </div>
  )
}

export default Post
