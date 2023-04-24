import "./PostForm.css";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../../redux/content-reducer/home-reducer.js";




function PostForm(props) {

  let updateNewPostText=(event)=>{
    props.updateNewPostText(event.target.value)
  }
  return (
    <form className="posts__form form">
      <label className="form__title">New post</label>
      <textarea
        onChange={updateNewPostText}
        className="form__input"
        value={props.newPostText}
        placeholder="What do you think about?"
      ></textarea>
      <button onClick={props.addPost} className="form__btn" type="button">
        Add post
      </button>
    </form>
  );
}

export default PostForm;
