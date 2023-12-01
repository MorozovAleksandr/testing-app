import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Router test", () => {
  test("MainPage AboutPage", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLimnk = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(mainLimnk);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("ErrorPage", () => {
    render(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("page-not-found")).toBeInTheDocument();
  });
});