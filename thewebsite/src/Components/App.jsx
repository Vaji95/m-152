import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { render } from "@testing-library/react";
import Vajeeran from "./SITES/Vajeeran";
import Darius from "./SITES/Darius";
import Matthias from "./SITES/Matthias";
import Wiktor from "./SITES/Wiktor";
import Stream from "./SITES/Stream";
import "../CSS/App.css";
import Header from "./Header";

function App() {
  const [key, setKey] = useState("home");
  return (
    <div className="App">
      <Header />
      <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="home" title="Home">
          <Stream />
        </Tab>
        <Tab eventKey="darius" title="Darius Degel">
          <Darius />
        </Tab>
        <Tab eventKey="wiktor" title="Wiktor Kepczynski">
          <Wiktor />
        </Tab>
        <Tab eventKey="matthias" title="Matthias Helfenstein">
          <Matthias />
        </Tab>
        <Tab eventKey="vajeeran" title="Vajeeran Logeswaran">
          <Vajeeran />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
