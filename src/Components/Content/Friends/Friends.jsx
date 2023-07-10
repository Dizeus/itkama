import "./Friends.css";
import User from "./User/User";
import React from "react";
import Paginator from "./Paginator";
let Friends = (props)=>{
    return <div className="friends">


        <Paginator  onPageClick={props.onPageClick} totalPages={props.totalPages} currPage = {props.currPage}/>

        {props.users.map((user) => {
            return <User followingProgress={props.followingProgress} key={user.id} user={user} follow={props.follow} unfollow={props.unfollow}/>
        })}
    </div>
}

export default Friends;
