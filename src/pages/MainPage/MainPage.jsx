import React from "react";

import Counter from "../../components/Counter/Counter";

import "./style.css";

const MainPage = () => {
  return (
    <div className={"MainPage"} data-testid="main-page">
      MainPage
      <Counter />
    </div>
  );
};

export default MainPage;
