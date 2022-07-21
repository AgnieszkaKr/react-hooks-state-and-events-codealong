import React, { useState } from "react";


function Toggle() {
  let [isOn, setIsOn] = useState(false)

  const handleEvent = ()=>{
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "white";
  return <button style={{background:color}} onClick={handleEvent}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
