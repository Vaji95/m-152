import React from "react";
import ReactPlayer from "react-player";
import "./Stream.css";

function App() {
  return (
    <div className="stream">
      <h1>Twitch Stream</h1>
      <h3>legendariusx</h3>
      <ReactPlayer url="https://www.twitch.tv/legendariusx" controls />
    </div>
  );
}

export default App;
