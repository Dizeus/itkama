import "./Dialog.css";
import {Navigate} from "react-router-dom";
import React from "react";
import {Field, Formik} from "formik";

function Dialog(props) {

  return (
    !props.isLogin ?
        <Navigate to="/login" replace={true}/>:
        <div className="messages__dialog dialog">
      <div className="dialog__names">
        {props.messages.users.map((user) => {
          return <div className="dialog__name">{user.name}</div>;
        })}
      </div>
      <div className="dialog__text">
        {props.messages.messagesText.map((msg) => {
          return <div>{msg}</div>;
        })}
          <NewMessageForm addMessage={props.addMessage}/>
{/*        <textarea
          onChange={props.updateNewMessage}
          value={props.messages.newMessageText}
        ></textarea>
        <button onClick={props.addMessage}>Send</button>*/}
      </div>
    </div>
  );
}

let NewMessageForm = (props) =>{
    return <Formik
        initialValues={{ newMessageText: ''}}
        validate={values => {
            const errors = {};
            if (!values.newMessageText) {
                errors.newMessageText = 'Message can\'t be empty';
            } else if (values.newMessageText.length>299) {
                errors.newMessageText = 'Message is too long!';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            props.addMessage(values.newMessageText)
            setSubmitting(false);
        }}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
                <Field
                    as="textarea"
                    name="newMessageText"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newMessageText}
                    className="form__input"
                    placeholder="type here..."
                />
                {errors.newMessageText && touched.newMessageText && errors.newMessageText}
                <button type="submit" disabled={isSubmitting}>
                    Send message
                </button>
            </form>
        )}
    </Formik>
}


export default Dialog;
