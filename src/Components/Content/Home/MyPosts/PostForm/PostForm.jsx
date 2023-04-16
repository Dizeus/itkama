import "./PostForm.css";
import React from "react";




function PostForm(props) {

  let newPostRef = React.createRef();

  let addPost = ()=>{
    let txt = newPostRef.current.value;
    props.addPost(txt);
  }
  let updateNewPostText=()=>{
    let txt = newPostRef.current.value;
    props.updateNewPostText(txt);
    console.log(txt)
  }
  return (
    <form className="posts__form form">
      <label className="form__title">New post</label>
      <textarea
        onChange={updateNewPostText}
        ref={newPostRef}
        className="form__input"
        placeholder="What do you think about?"
      ></textarea>
      <button onClick={addPost} className="form__btn" type="button">
        Add post
      </button>
    </form>
  );
}

export default PostForm;
