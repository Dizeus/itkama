import {connect} from "react-redux";
import Friends from "./Friends";
import {
    follow,
 requestUsers,
 unfollow,
} from "../../../redux/content-reducer/friends-reducer";
import React from "react";
import Loader from "../../UI/Loader/Loader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageCount,
    getTotalPage,
    getUsers
} from "../../../redux/content-reducer/friends-selectors";

class FriendsContainer extends React.Component {

    componentDidMount = () => {
        this.props.requestUsers(this.props.pageCount,this.props.currentPage);

    }

    onPageClick = (currPage)=>{
        this.props.requestUsers(this.props.pageCount,currPage);
    }
    render() {

      return <Loader isFetching={this.props.isFetching}>
          <Friends users={this.props.users} onPageClick={this.onPageClick} totalPages={this.props.totalPages}
                   follow={this.props.follow} unfollow={this.props.unfollow}
                   followingProgress={this.props.followingProgress} currPage = {this.props.currentPage}/>
      </Loader>
    }
}

const mapStateToProps = (state)=>{
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalPages: getTotalPage(state),
        isFetching: getIsFetching(state),
        pageCount: getPageCount(state),
        followingProgress: getFollowingProgress(state),
    }
}
/*const mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setTotalPage:(count)=>{
            dispatch(setTotalPageAC(count))
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page))
        },
        setIsFetching:(isFetching)=>{
            dispatch(setIsFetchingAC(isFetching))
        },
    }
}*/

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
    })
)(FriendsContainer);
