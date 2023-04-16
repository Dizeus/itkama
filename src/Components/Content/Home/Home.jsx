import Bio from "./Bio/Bio";
import "./Home.css";
import banner from "./images/header.jpg";
import MyPosts from "./MyPosts/MyPosts";

function Home(props) {
  console.log(props)
  return (
    <div className="main__page home">
      <img className="home__header" src={banner} alt="header" />
      <Bio />
      <MyPosts
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
        posts={props.posts.posts}
      />
    </div>
  );
}

export default Home;
