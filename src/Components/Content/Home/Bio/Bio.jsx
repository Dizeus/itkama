import "./Bio.css";
import avatar from "../images/avatar.jpg";
import banner from "../images/header.jpg";
import React, {useEffect, useState} from "react";
import Contact from "../Contact/Contact";
import {Formik} from "formik";
import user from "../../Friends/User/User";
import {saveNewProfileData} from "../../../../redux/content-reducer/home-reducer";

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



  const OnStatusChange = (event)=>{
    setStatus(event.target.value)
  }
  const offEditMode = () =>{
    setEditMode(false)
    //props.updateUserStatus(status)
  }
  const onEditMode = () =>{
    setEditMode(true)
  }

  const saveNewProfileData = (values) => {
      props.saveNewProfileData(values, props.userProfile.userId);
      offEditMode();
      console.log(editMode)
  }
  const onPhotoChange = (event) => {
    props.savePhoto(event.target.files[0])
  }
  return (
        <>
         {/* {console.log(props.userProfile)}*/}
          <img className="home__header" src={banner} alt="header"/>
          <div className="home__bio bio">
            <div className='bio__photo'>
              <img src={props.userProfile.photos.small || avatar}
                   className="bio__avatar"/>
              {props.isOwner && <input className="bio__avatar-edit" onChange={onPhotoChange} placeholder='value' type="file"/>}
            </div>
            {editMode?<BioDescriptionForm saveNewProfileData={saveNewProfileData} userProfile={props.userProfile}/>:<BioDescription onEditMode={onEditMode} userStatus={props.userStatus} userProfile={props.userProfile}/>}
          </div>
        </>
    );
}
export default Bio;

const BioDescription = (props)=>{

  return <div className="bio__description description">
    <div className="description__name">{props.userProfile.fullName || "John Wick"}</div>
    <div className="description__info">
      <div className="description__status">
        {/*{editMode?
            <input onChange={OnStatusChange} autoFocus={true} onBlur={offEditMode} className="description__status-input"  type="text" value={status}/>://'Watcher, free-time singer(definetly at nigth)'/>:
            <div onDoubleClick={onEditMode} </div>>*/}
              <span className="description__categories">Status: </span>
              {props.userStatus || "something" }
      </div>
      <div className="description__about">
        <span className="description__categories">About me: </span>
        {props.userProfile.aboutMe || "Something about me"}
      </div>
      <div className="description__job">
        <span className="description__categories">Looking for a job: </span>
        {props.userProfile.lookingForAJob?"Yes":"No"}
      </div>
      <div className="description__job-description">
        <span className="description__categories">Description of a job: </span>
        {props.userProfile.lookingForAJobDescription || "Description of a job"}
      </div>
      <div className="description__contacts">
        {Object.keys(props.userProfile.contacts).map(key=><Contact key={key} contact={key} contactText={props.userProfile.contacts[key]}/>)}
      </div>
      <button onClick={props.onEditMode}>Edit</button>
    </div>
  </div>
}
const BioDescriptionForm = ({userProfile,saveNewProfileData}) => {
  return (<Formik
      initialValues={{...userProfile, contacts: {...userProfile.contacts}}}
      validate={values => {
        const errors = {};

        if (!values.aboutMe) {
          errors.aboutMe = 'Required';
        } else if (!values.fullName) {
          errors.aboutMe = 'Required';
        }else if (!values.lookingForAJobDescription) {
          errors.lookingForAJobDescription = 'Required';
        }
        Object.keys(values.contacts).map(key=>{
          let regex = new RegExp('^https:', 'gi')
          if(!regex.test(values.contacts[key])){
            errors.contacts = `Invalid url address - ${key}`;
          }
        })
        return errors;

      }}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        saveNewProfileData(values)
         /* console.log('OnSubmit')
        console.log(values)*/
        setSubmitting(false);
      }}
  >
    {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        status,
        /* and other goodies */
      }) => (

        <form style={{display: 'flex', flexDirection: 'column', rowGap:'10px'}} onSubmit={handleSubmit}>
            <div className="">Fullname</div>
            <input
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                placeholder={"fullName"}
            />
            <div className="">About me</div>
          <input
              type="text"
              name="aboutMe"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.aboutMe}
              placeholder={"About me"}
          />
          {errors.aboutMe && touched.aboutMe && errors.aboutMe}
            <div>
          <input
              type="checkbox"
              name="lookingForAJob"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.lookingForAJob}
              //value={values.lookingForAJob}
              placeholder={"isLookingJob"}
          />Looking for a job
            </div>
            <div className="">Job description</div>
            <input
                type="text"
                name="lookingForAJobDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription}
            />
          {errors.lookingForAJobDescription && touched.lookingForAJobDescription && errors.lookingForAJobDescription}
          <div className="">Contacts</div>

          {Object.keys(values.contacts).map(key=>{
            return <div key={key}>
              <div>{key}</div>

              <input
                type="text"
                name={`contacts.${key}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts[key]}
                />

            </div>
          })}
          {errors.contacts && touched.contacts && errors.contacts}
          {status && <div>{status.error}</div>       }
          <button type="submit" disabled={isSubmitting}>
            Sign in
          </button>
        </form>
    )}
  </Formik>)
}