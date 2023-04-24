import "./MyPosts.css";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import postAvatar from "../images/dog.jpg";



function MyPosts(props) {
  return (
    <div className="home__posts posts">
      <PostForm newPostText={props.newPostText} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>
      <h2 className="posts__title">My posts</h2>
      {props.posts.map((post) => (
        <Post key={post.id} avatar={postAvatar} post={post} />
      ))}
    </div>
  );
}

export default MyPosts;
