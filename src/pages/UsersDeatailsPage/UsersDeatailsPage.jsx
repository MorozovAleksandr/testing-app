import { useLocation } from "react-router-dom";

import "./style.css";
import { memo } from "react";

const UsersDeatailsPage = () => {
  let { state } = useLocation();

  return (
    <div className={"UsersDeatailsPage"} data-testid="userdetails-page">
      <div className={"UsersDeatailsPage__element"}>
        name: {state.user.name}
      </div>
      <div className={"UsersDeatailsPage__element"}>id: {state.user.id}</div>
      <div className={"UsersDeatailsPage__element"}>
        username: {state.user.username}
      </div>
    </div>
  );
};

export default memo(UsersDeatailsPage);
