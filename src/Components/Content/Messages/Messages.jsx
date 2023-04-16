import Dialog from "./Dialog/Dialog";
import "./Messages.css";

function Messages(props) {
  return (
    <div className="main__page messages">
      <Dialog users={props.users} />
    </div>
  );
}

export default Messages;
