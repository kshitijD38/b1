import { useState } from "react";
import "./styles.css";

export default function App() {
  const [b, setB] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div style={{ textAlign: "center" }} className="App">
        {!b ? (
          <input placeholder="input here" onChange={handleChange}></input>
        ) : null}
        <button
          onClick={() => {
            !b ? setB(true) : setB(false);
          }}
        >
          {b ? `Disappear` : `Appear`}
        </button>
        {b ? (
          <div>
            <h1>{`Welcome ${text} to CodeSandbox`}</h1>
            <h2>Start editing to see some magic happen!</h2>
          </div>
        ) : (
          <>
            <h1>Click above button to Start.</h1>
          </>
        )}
      </div>
    </>
  );
}
