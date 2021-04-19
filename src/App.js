import { useState } from "react";
import "./styles.css";

export default function App() {
  const [b, setB] = useState(false);
  return (
    <>
      <div style={{ textAlign: "center" }} className="App">
        <button
          onClick={() => {
            !b ? setB(true) : setB(false);
          }}
        >
          {b ? `Disappear` : `Appear`}
        </button>
        {b ? (
          <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </div>
        ) : (
          <h1>Click above button to Start.</h1>
        )}
      </div>
    </>
  );
}
