import "./Header.css"
import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {getAuthUser, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{


  render(){
    return (
      <Header {...this.props}/>
    );
  }
}

let mapStateToProps = (state) =>({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isLogin: state.auth.isLogin
})
export default connect(mapStateToProps,{getAuthUser,logout})(HeaderContainer);