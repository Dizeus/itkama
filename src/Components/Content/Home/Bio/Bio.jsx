import "./Bio.css";
import avatar from "../images/avatar.jpg";
import banner from "../images/header.jpg";
import {useEffect, useState} from "react";

/*
class Bio extends Component {

  state = {
    editMode: false,
    status: this.props.userStatus
  }
  componentDidUpdate = (prevProps, prevState) =>{
    console.log("ello")
    if(this.props.userStatus !== prevProps.userStatus){
      this.setState({
        status: this.props.userStatus
      })
    }
  }

  onEditMode = () =>{
    this.setState({
      editMode:true
    })
  }
  offEditMode = (event) =>{
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatus(this.state.status)
  }

  OnStatusChange = (event)=>{
    this.setState({
      status: event.target.value
    })
  }
  render() {
    return (

        <>
          <img className="home__header" src={banner} alt="header"/>
          <div className="home__bio bio">
            <img src={/!*props.userProfile.photos.small ?props.userProfile.photos.small:*!/avatar}
                 className="bio__avatar"></img>
            <div className="bio__description description">
              <div
                  className="description__name">{this.props.userProfile ? this.props.userProfile.fullName : "John Wick"}{/!*Basil Korsikovich*!/}</div>
              <div className="description__info">
                <div className="description__status">
                  {this.state.editMode?
                      <input onChange={this.OnStatusChange} autoFocus={true} onBlur={this.offEditMode} className="description__status-input"  type="text" value={this.state.status}/>://'Watcher, free-time singer(definetly at nigth)'/>:
                      <div onDoubleClick={this.onEditMode}>
                        <span className="description__categories">Status: </span>
                        {this.props.userStatus || "something" }
                      </div>
                  }
                </div>
              {/!*  <div className="description__age">
                  <span className="description__categories">Age: </span>
                  3years, young and wild
                </div>
                <div className="description__about">
                  <span className="description__categories">About me: </span>I am
                  huge black dog, work from home. Earn a lot of food. Love other
                  dogs but not other people:)
                </div>*!/}
              </div>
            </div>
          </div>
        </>
    );
  }
}
*/

const Bio = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.userStatus);

  useEffect(()=>{
      setStatus(props.userStatus)
  }, [props.userStatus])
  const onEditMode = () =>{
    setEditMode(true)
  }
  const offEditMode = (event) =>{
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const OnStatusChange = (event)=>{
    setStatus(event.target.value)
  }

  return (
        <>
          <img className="home__header" src={banner} alt="header"/>
          <div className="home__bio bio">
            <img src={/*props.userProfile.photos.small ?props.userProfile.photos.small:*/avatar}
                 className="bio__avatar"></img>
            <div className="bio__description description">
              <div
                  className="description__name">{props.userProfile ? props.userProfile.fullName : "John Wick"}{/*Basil Korsikovich*/}</div>
              <div className="description__info">
                <div className="description__status">
                  {editMode?
                      <input onChange={OnStatusChange} autoFocus={true} onBlur={offEditMode} className="description__status-input"  type="text" value={status}/>://'Watcher, free-time singer(definetly at nigth)'/>:
                      <div onDoubleClick={onEditMode}>
                        <span className="description__categories">Status: </span>
                        {props.userStatus || "something" }
                      </div>
                  }
                </div>
                {/*  <div className="description__age">
                  <span className="description__categories">Age: </span>
                  3years, young and wild
                </div>
                <div className="description__about">
                  <span className="description__categories">About me: </span>I am
                  huge black dog, work from home. Earn a lot of food. Love other
                  dogs but not other people:)
                </div>*/}
              </div>
            </div>
          </div>
        </>
    );
}
export default Bio;