import Bio from "./Bio/Bio";
import "./Home.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../../UI/Loader/Loader";
import React from "react";
import {saveNewProfileData} from "../../../redux/content-reducer/home-reducer";

const Home = React.memo(({isFetching,userProfile,userStatus, updateUserStatus,isOwner,savePhoto,saveNewProfileData}) => (
    <div className="main__page home">
        <Loader isFetching={isFetching}>
            <Bio saveNewProfileData={saveNewProfileData} savePhoto={savePhoto} isOwner={isOwner} updateUserStatus={updateUserStatus} userStatus={userStatus} userProfile={userProfile}/>
            <MyPostsContainer/>
        </Loader>
    </div>
));

export default Home;
