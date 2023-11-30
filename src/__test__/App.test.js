import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("Elements", () => {
    render(<App />);
    const helloWorldEl = screen.getByText(/Hello world/i);
    const btnEl = screen.getByRole("button");
    const inputEl = screen.getByPlaceholderText(/some text.../i);
    expect(helloWorldEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toMatchSnapshot();
    // screen.debug();
  });
  
  test("Click event", () => {
    render(<App />);
    const toggleBtn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-div')).toBeNull();
    fireEvent.click(toggleBtn)
    expect(screen.queryByTestId('toggle-div')).toBeInTheDocument();
    fireEvent.click(toggleBtn)
    expect(screen.queryByTestId('toggle-div')).toBeNull();
    // screen.debug();
  });
  
  test("Input event", () => {
    render(<App />);
    const inputEl = screen.getByPlaceholderText(/some text.../i);
    expect(screen.queryByTestId('input-value')).toContainHTML('');
    fireEvent.input(inputEl, {
      target: {
        value: '1337',
      }
    });
    expect(screen.queryByTestId('input-value')).toContainHTML('1337');
    // screen.debug();
  });
});
