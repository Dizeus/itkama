import Bio from "./Bio/Bio";
import "./Home.css";
import banner from "./images/header.jpg";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Home() {
  return (
    <div className="main__page home">
      <img className="home__header" src={banner} alt="header" />
      <Bio />
      <MyPostsContainer/>
    </div>
  );
}

export default Home;
