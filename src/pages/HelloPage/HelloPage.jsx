import { useState } from "react";

const HelloPage = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const onChange = (e) => setValue(e.target.value);
  const toggle = () => value === "hello" && setVisible(!visible);

  return (
    <div>
      <input onChange={onChange} value={value} type="text" id="search" />
      <button onClick={toggle} id="toggle">
        Hello world
      </button>
      {visible && <h1 id="hello">some text</h1>}
    </div>
  );
};

export default HelloPage;
