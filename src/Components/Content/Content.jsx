import "./Content.css"
import Messages from "./Messages/Messages";
import Communities from "./Communities/Communities";
import Games from "./Games/Games";
import { Routes, Route } from "react-router-dom";
import Settings from "./Settings/Settings";
import React, {Suspense, lazy, useEffect} from "react";
import HomeContainer from "./Home/HomeContainer";
import Login from "../Login/Login";

const FriendsContainer = lazy(()=>import("./Friends/FriendsContainer"));
function Content() {

  return (
    <main className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/home/:userId?"
              element={
                <HomeContainer/>
              }
            />
            <Route
              path="/messages/*"
              element={
                <Messages/>
              }
            />
            <Route path="/comunities" element={<Communities />} />
              <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/games" element={<Games />} />
            <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
    </main>
  );
}

export default Content;
