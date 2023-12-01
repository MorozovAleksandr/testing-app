import React, { useState } from "react";

const Elements = () => {
  const [toggle, setToggle] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const onClick = () => setToggle(!toggle);
  const onChange = (e) => setInputVal(e.target.value);

  return (
    <div>
      <h1>Hello worlds</h1>
      <input
        type="text"
        placeholder="some text..."
        value={inputVal}
        onChange={onChange}
      />
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      {toggle && <div data-testid="toggle-div">toggle</div>}
      <div data-testid="input-value">{inputVal}</div>
    </div>
  );
};

export default Elements;
