import { render, screen, fireEvent } from "@testing-library/react";
import Elements from "../components/Elements";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  test("Elements", () => {
    render(<Elements />);
    const helloWorldEl = screen.getByText(/Hello world/i);
    const btnEl = screen.getByRole("button");
    const inputEl = screen.getByPlaceholderText(/some text.../i);
    expect(helloWorldEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
  });

  test("Click event", () => {
    render(<Elements />);
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-div")).toBeNull();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-div")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-div")).toBeNull();
  });

  test("Input event", () => {
    render(<Elements />);
    const inputEl = screen.getByPlaceholderText(/some text.../i);
    expect(screen.queryByTestId("input-value")).toContainHTML("");
    userEvent.type(inputEl, "1337");
    expect(screen.queryByTestId("input-value")).toContainHTML("1337");
  });
});
