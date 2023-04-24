import { addMessageCreator, updateNewMessageCreator } from "../../../../redux/content-reducer/messages-reducer";
import "./Dialog.css";
import Dialog from "./Dialog";
import {connect} from "react-redux";


const mapStateToProps = (state)=>{
  return {
    messages: state.content.messages,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onChangeNewMessage: (txt)=>{
      dispatch(updateNewMessageCreator(txt));
    },
    addMessage:()=>{dispatch(addMessageCreator());}
  }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
