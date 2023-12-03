import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

export const renderWithRedux = (component, state) => (
  <Provider store={createReduxStore(state)}>{component}</Provider>
);
