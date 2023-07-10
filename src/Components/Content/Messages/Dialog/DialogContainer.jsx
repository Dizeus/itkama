import {
  addMessage,
} from "../../../../redux/content-reducer/messages-reducer";
import "./Dialog.css";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthNavigate} from "../../../../hoc/withAuthNavigate";
import {compose} from "redux";


const mapStateToProps = (state)=>{
  return {
    messages: state.content.messages,
    isLogin: state.auth.isLogin
  }
}
export default compose(
    connect(mapStateToProps, {
      addMessage,
    }),
    withAuthNavigate
)(Dialog);
