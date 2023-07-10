import React from "react";
import {connect} from "react-redux";
import {getUser, getUserStatus, updateUserStatus} from "../../../redux/content-reducer/home-reducer";
import {useParams} from 'react-router-dom';
import Home from "./Home";
import {withAuthNavigate} from "../../../hoc/withAuthNavigate";
import {compose} from "redux";

class HomeContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.userId;
        }
        this.props.getUser(userId)
        console.log()
        this.props.getUserStatus(userId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.match.params.userId)
        if(prevProps.match.params.userId !=  this.props.match.params.userId)
            console.log(this.props.match.params.userId)
    }

    render() {
        return <Home isFetching={this.props.home.isFetching} userProfile={this.props.home.userProfile}
                     userStatus={this.props.home.userStatus} updateUserStatus={this.props.updateUserStatus}/>;
    }


}

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
let mapStateToProps = (state) => ({
    home: state.content.home,
    isLogin: state.auth.isLogin,
    userStatus: state.content.home.userStatus,
    userId: state.auth.userId,
})
export default compose(
    connect(mapStateToProps,{getUser, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthNavigate
)(HomeContainer);
