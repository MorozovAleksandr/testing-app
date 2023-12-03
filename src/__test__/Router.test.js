import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar/Navbar";
import { renderWithRedux } from "./helpers/renderWithRedux";
import { renderWithRouter } from "./helpers/renderWithRouter";

describe("Router test", () => {
  test("to about-page", () => {
    render(renderWithRedux(renderWithRouter(<Navbar />)));
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("to main-page", () => {
    render(renderWithRedux(renderWithRouter(<Navbar />)));
    const mainLimnk = screen.getByTestId("main-link");
    userEvent.click(mainLimnk);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("to error-page", () => {
    render(renderWithRouter(<Navbar />, "/random"));
    expect(screen.getByTestId("page-not-found")).toBeInTheDocument();
  });
});
