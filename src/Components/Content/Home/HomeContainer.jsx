import React from "react";
import {connect} from "react-redux";
import {
    getUser,
    getUserStatus,
    saveNewProfileData,
    savePhoto,
    updateUserStatus
} from "../../../redux/content-reducer/home-reducer";
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
        if(prevProps.match.params.userId !=  this.props.match.params.userId) {
            let userId = this.props.match.params.userId;
            if(!userId){
                userId = this.props.userId;
            }
            this.props.getUser(userId)
            this.props.getUserStatus(userId);
        }
    }

    render() {
        return <Home saveNewProfileData={this.props.saveNewProfileData} isFetching={this.props.home.isFetching} userProfile={this.props.home.userProfile}
                     userStatus={this.props.home.userStatus} updateUserStatus={this.props.updateUserStatus}
                    isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
        />;
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
    connect(mapStateToProps,{getUser, getUserStatus, updateUserStatus, savePhoto, saveNewProfileData}),
    withRouter,
    withAuthNavigate
)(HomeContainer);
