import "./User.css";
import userLogo from "../../../../assets/user-logo.png"
import {NavLink} from "react-router-dom";

function User({user,follow,unfollow,setFollowProgress,followingProgress}) {
    let onClickFollow = ()=>{
        follow(user.id)
    }
    let onClickUnfollow = ()=>{
        unfollow(user.id)
    }
    return (
        <div className="user">
            <div className="user__avatar-follow">
                <NavLink to={"/home/"+user.id}><img className="user__image" src={user.photos.small===null?userLogo:user.photos.small} alt="image"/></NavLink>
                {user.followed?<button disabled={followingProgress.some(id=>id===user.id)} className="user__follow" onClick={onClickUnfollow}>unfollow</button>:<button disabled={followingProgress.some(id=>id===user.id)} className="user__follow" onClick={onClickFollow}> follow</button>}
            </div>
            <div className="user__info">
                <div className="user__name">{user.name}</div>
                <div className="user__status">{user.status}</div>
            </div>
        </div>
    );
}

export default User;