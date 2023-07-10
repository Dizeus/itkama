import "./MyPosts.css";
import Post from "./Post/Post";
import postAvatar from "../images/dog.jpg";
import {Field, Formik} from "formik";
import React from "react";


function MyPosts(props) {
    return <div className="home__posts posts">
        <NewPostForm addPost={props.addPost}/>

        {/*<PostForm newPostText={props.newPostText} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>*/}
        <h2 className="posts__title">My posts</h2>
        {props.posts.map((post) => (
            <Post key={post.id} avatar={postAvatar} post={post}/>
        ))}
    </div>
}


let NewPostForm = (props) =>{
    return <Formik
        initialValues={{ newPostText: ''}}
        validate={values => {
            const errors = {};
            if (!values.newPostText) {
                errors.newPostText = 'Post can\'t be empty';
            } else if (values.newPostText.length>100) {
                errors.newPostText = 'Post text is too long!';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            props.addPost(values.newPostText)
            setSubmitting(false);
        }}
    >

        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
          }) => (
            <form className="posts__form form" onSubmit={handleSubmit}>
                <label className="form__title">New post</label>
                <Field
                    as="textarea"
                    name="newPostText"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newPostText}
                    className="form__input"
                    placeholder="What do you think about?"
                />
                {errors.newPostText && touched.newPostText && errors.newPostText}
                <button className="form__btn" type="submit" disabled={isSubmitting}>
                    Add post
                </button>
            </form>
        )}
    </Formik>
}
export default MyPosts;
