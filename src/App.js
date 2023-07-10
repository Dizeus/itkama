import './App.css';
import { BrowserRouter} from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Content from "./Components/Content/Content";
import HeaderContainer from "./Components/Header/HeaderContainer";
import React, {Component} from "react";
import {connect} from "react-redux";
import {getAuthUser} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import Friends from "./Components/Content/Friends/Friends";
import Loader from "./Components/UI/Loader/Loader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        return(
            <Loader isFetching={this.props.initialized}>
                <BrowserRouter>
                    <div className="App">
                        <HeaderContainer/>
                        <Sidebar/>
                        <Content/>
                    </div>
                </BrowserRouter>)
            </Loader>)

    }
}
const mapStateToProps = (state)=> ({
    initialized: state.app.isInitialized,
})
export default connect(mapStateToProps, {initializeApp}) (App);
