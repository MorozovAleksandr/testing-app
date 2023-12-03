import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "../components/Counter/Counter";
import { renderWithRedux } from "./helpers/renderWithRedux";

describe("Counter test", () => {
  test("increment", () => {
    render(renderWithRedux(<Counter />, { counter: { value: 10 } }));

    const incrementBtn = screen.getByTestId("increment-btn");
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });
});
