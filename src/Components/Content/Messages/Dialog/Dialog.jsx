import {NavLink, Routes, Route } from "react-router-dom";
import Messages from "../Messages";
import "./Dialog.css";
import DialogText from "./DialogText";

function Dialog(props) {
  return (
    <div className="messages__dialog dialog">
      <div className="dialog__names">
        {props.users.map((user) => {
          return (
            <NavLink
              key={user.id}
              className="dialog__name"
              to={"/messages/" + user.name.toLowerCase()}
            >
              {user.name}
            </NavLink>
          );
        })}
      </div>
      <div className="dialog__text">
        <Routes>
          <Route path="/messages/oleg/*" element={<DialogText />} />
          <Route path="/messages/olexadr" element={<DialogText />} />
          <Route path="/messages/peter" element={<DialogText />} />
          <Route path="/messages/john" element={Messages} />
        </Routes>
        {/* <Routes>
          {users.map(user=>{
             return <Route path={"/messages/"+user.name.toLowerCase()} key={user.id} component={DialogText} />;
          })}
        </Routes> */}
      </div>
    </div>
  );
}

export default Dialog;
