import "./Dialog.css";

function Dialog(props) {

  return (
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
        <textarea
          onChange={props.onChangeNewMessage}
          value={props.messages.newMessageText}
        ></textarea>
        <button onClick={props.addMessage}>Send</button>
      </div>
    </div>
  );
}

export default Dialog;
