import React from 'react'
import './post.css'
import { Link } from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className='post'>
      {post.photo &&(
        <img 
        className='postImg' 
        src={post.photo}
        alt=''
        />
      )}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=> (
                <span className="postCat">{c.name}</span>
              ))}
                
            </div>
            <span className="postTitle">
            <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
            </span>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
      {post.desc}
      </p>
    </div>
  )
}

export default Post