import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/content-reducer/home-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
    return {
        posts: state.content.home.posts,
        newPostText: state.content.home.newPostText
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        updateNewPostText: (txt)=>{
            dispatch(updateNewPostTextActionCreator(txt));
        },
        addPost:()=>{dispatch(addPostActionCreator());}
    }
}
const MyPostsConntainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConntainer;
