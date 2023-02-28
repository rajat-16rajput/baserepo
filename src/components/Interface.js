import React, { useState } from "react";
import Display from "./Display";
export default function Interface() {
  let [displayString, setdisplayString] = useState("");
  return (
    <div>
      <div>
        <Display value={displayString} />
      </div>
      <div>
        <button
          onClick={() => {
            setdisplayString((displayString += "1"));
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "2"));
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "3"));
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "+"));
          }}
        >
          +
        </button>
        <br></br>
        <button
          onClick={() => {
            setdisplayString((displayString += "4"));
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "5"));
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "6"));
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "-"));
          }}
        >
          -
        </button>
        <br></br>
        <button
          onClick={() => {
            setdisplayString((displayString += "7"));
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "8"));
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "9"));
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "/"));
          }}
        >
          /
        </button>
        <br></br>
        <button
          onClick={() => {
            setdisplayString((displayString += "0"));
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString = " "));
          }}
        >
          AC
        </button>
        <button
          onClick={() => {
            setdisplayString(eval(displayString));
          }}
        >
          =
        </button>
        <button
          onClick={() => {
            setdisplayString((displayString += "*"));
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}
