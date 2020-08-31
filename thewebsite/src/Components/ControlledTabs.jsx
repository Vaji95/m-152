import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { render } from "@testing-library/react";
import Stream from "./Stream";
function ControlledTabs() {
  const [key, setKey] = useState("home");

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="home" title="Home">
        <Stream />
      </Tab>
      <Tab eventKey="darius" title="Darius Degel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        voluptatibus veritatis placeat magnam fuga nihil, eos accusantium minima
        alias itaque architecto mollitia, quisquam obcaecati sequi deserunt rem
        expedita perspiciatis! Quasi?
      </Tab>
      <Tab eventKey="wiktor" title="Wiktor Kepczynski">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        voluptatibus veritatis placeat magnam fuga nihil, eos accusantium minima
        alias itaque architecto mollitia, quisquam obcaecati sequi deserunt rem
        expedita perspiciatis! Quasi?
      </Tab>
      <Tab eventKey="matthias" title="Matthias Helfenstein">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        voluptatibus veritatis placeat magnam fuga nihil, eos accusantium minima
        alias itaque architecto mollitia, quisquam obcaecati sequi deserunt rem
        expedita perspiciatis! Quasi?
      </Tab>
      <Tab eventKey="vajeeran" title="Vajeeran Logeswaran">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        voluptatibus veritatis placeat magnam fuga nihil, eos accusantium minima
        alias itaque architecto mollitia, quisquam obcaecati sequi deserunt rem
        expedita perspiciatis! Quasi?
      </Tab>
    </Tabs>
  );
}
export default ControlledTabs;
