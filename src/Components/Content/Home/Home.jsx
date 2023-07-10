import Bio from "./Bio/Bio";
import "./Home.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../../UI/Loader/Loader";
import React from "react";

const Home = React.memo(({isFetching,userProfile,userStatus, updateUserStatus}) => (
    <div className="main__page home">
        <Loader isFetching={isFetching}>
            <Bio updateUserStatus={updateUserStatus} userStatus={userStatus} userProfile={userProfile}/>
            <MyPostsContainer/>
        </Loader>
    </div>
));

export default Home;
