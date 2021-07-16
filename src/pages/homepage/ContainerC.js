import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./ContainerC.css";

import MapChart from "./MapChart";

function ContainerC() {
    const [content, setContent] = useState("");
    return (
      <div className='map'>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
}

export default ContainerC
