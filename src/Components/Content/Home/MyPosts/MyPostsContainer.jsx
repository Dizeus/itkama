import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/content-reducer/home-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
    return {
        posts: state.content.home.posts,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addPost:(newPostText)=>{dispatch(addPostActionCreator(newPostText));}
    }
}
const MyPostsConntainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConntainer;
