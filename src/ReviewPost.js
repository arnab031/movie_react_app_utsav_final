import React from "react";
import "./ReviewPost.css";
import validator from "validator";


function ReviewPost(props) {
  const { author_details, content, created_at } = props.data;

  //   const base_url = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  // console.log(props.data.release_date);

  return (
    // <div className="post">
    //   <h1>{author_details.username}</h1>

    //   {truncate(content, 250)}

    //   <p>{created_at}</p>
    //   {author_details.avatar_path && validator.isURL(author_details.avatar_path) && <img src={author_details.avatar_path} alt="author" />}
    // </div>

    
      <div className="testimonial-box">
        <div className="box-top">
          <div className="profile">
            <div className="profile-img">
              {author_details.avatar_path &&
                validator.isURL(author_details.avatar_path) && (
                  <img src={author_details.avatar_path} alt="author" />
                )}
            </div>
            <div className="name-user">
              <strong>{author_details.username}</strong>
              <span>{created_at}</span>
            </div>
          </div>
          <div className="client-comment">{content}</div>
        </div>
      </div>
    
  );
}
export default ReviewPost;
