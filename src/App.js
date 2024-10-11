import "./App.css";
import React, { useState } from "react";

function App() {
  const [userInput, setuserInput] = useState("");
  const maxLength = 10;
  let data = [
    "AC",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "00",
    0,
    ".",
    "=",
  ];
  console.log(userInput);

  const handleButton = (button) => {
    if (button === "=") {
      setuserInput(eval(filterInvalidSequences(userInput)).toString());
    } else if (button === "AC") {
      setuserInput("");
    } else if (button === "DEL") {
      setuserInput((prev) => prev.slice(0, -1));
    } else {
      if (userInput.length < maxLength) {
        // const validInput = value.replace(/[^0-9.%/*+\-]/g, "");
        setuserInput((prev) => prev + button);
      }
    }

    // if (typeof button === "number") {
    //   setuserInput((prev) => prev + button);
    // } else {
    //   setuserInput((prev) => prev + button);
    // }

    console.log(typeof button);
  };

  const filterInvalidSequences = (input) => {
    return input
      .replace(/([+\-*/%])\1+/g, "$1")
      .replace(/([+\-*/%])[+\-*/%]$/, "$1");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (userInput.length < maxLength) {
      const validInput = value.replace(/[^0-9.%/*+\-]/g, "");
      setuserInput(validInput);
    }
    // const validInput = value.replace(/[^0-9.%/*+\-]/g, "");
    // setuserInput(validInput);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div style={{ width: "100%" }}>
          <input
            style={{
              height: "50px",
              textAlign: "right",
              fontSize: "26px",
              fontWeight: "bolder",
              width: "100%",
              borderRadius: "10px",
              marginBottom: "20px",
              border: "none",
              padding: "0px 2px 0px 2px",
            }}
            type="text"
            value={userInput}
            // onChange={(e) => setuserInput(e.target.value)}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", width: "402px" }}>
          {data.map((button) => (
            <button
              key={button}
              style={{
                // width: "94px",
                flexGrow: "1",
                aspectRatio: "1",
                height: "80px",
                fontSize: "16px",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "rgb(31,31,69)",
                margin: "2px",
                border: "none",
                fontWeight: "bolder",
              }}
              onClick={() => handleButton(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
