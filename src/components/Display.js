import React, { useState } from "react";
import Interface from "./Interface";

export default function Display(props) {
  return (
    <div>
      <input type="text" value={props.value} />
    </div>
  );
}
