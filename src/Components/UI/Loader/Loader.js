import loader from "../../../assets/loading.gif";
import React from "react";
import './Loader.css';

let Loader = (props) =>{
    return props.isFetching?<img className="loader" src={loader} alt='loading...'/>:props.children;
}

export default Loader;