import "./Content.css"
import Home from "./Home/Home";
import Messages from "./Messages/Messages";
import Comunities from "./Comunities/Comunities";
import Games from "./Games/Games";
import { Routes, Route } from "react-router-dom";
import Settings from "./Settings/Settings";

function Content(props) {
   console.log(props);
  return (
    <main className="main">
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              updateNewPostText={props.updateNewPostText}
              addPost={props.addPost}
              posts={props.content.home}
            />
          }
        />
        <Route
          path="/messages/*"
          element={<Messages users={props.content.messages} />}
        />
        <Route path="/comunities" element={<Comunities />} />
        <Route path="/games" element={<Games />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
}

export default Content;
