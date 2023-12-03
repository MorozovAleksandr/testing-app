import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Elements from "../components/Elements";

describe("Elements test", () => {
  test("in the Document", () => {
    render(<Elements />);
    const helloWorldEl = screen.getByText(/Hello world/i);
    const btnEl = screen.getByRole("button");
    const inputEl = screen.getByPlaceholderText(/some text.../i);
    expect(helloWorldEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
  });

  test("click event", () => {
    render(<Elements />);
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-div")).toBeNull();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("toggle-div")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("toggle-div")).toBeNull();
  });

  test("input event", () => {
    render(<Elements />);
    const inputEl = screen.getByPlaceholderText(/some text.../i);
    expect(screen.queryByTestId("input-value")).toContainHTML("");
    userEvent.type(inputEl, "1337");
    expect(screen.queryByTestId("input-value")).toContainHTML("1337");
  });
});
