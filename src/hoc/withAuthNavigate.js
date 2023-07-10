import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state)=>({
    isLogin: state.auth.isLogin
})
export const withAuthNavigate = (Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            return this.props.isLogin ?
                <Component {...this.props}/>
                :<Navigate to="/login" replace={true}/>;
        }
    }
    return connect(mapStateToProps)(RedirectComponent);
}