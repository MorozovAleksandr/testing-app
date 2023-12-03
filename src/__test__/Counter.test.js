import { Provider } from "react-redux";
import { createReduxStore } from "../store/store";
import Counter from "../components/Counter/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter test", () => {
  test("increment", () => {
    render(
      <Provider store={createReduxStore({ counter: { value: 10 } })}>
        <Counter />
      </Provider>
    );

    const incrementBtn = screen.getByTestId("increment-btn");
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });
});
