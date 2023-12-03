import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar/Navbar";
import { renderWithRedux } from "./helpers/renderWithRedux";
import { renderWithRouter } from "./helpers/renderWithRouter";

describe("Navbar test", () => {
  test("about link", () => {
    render(renderWithRedux(renderWithRouter(<Navbar />)));
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("main link", () => {
    render(renderWithRedux(renderWithRouter(<Navbar />)));
    const mainLimnk = screen.getByTestId("main-link");
    userEvent.click(mainLimnk);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("user link", () => {
    render(renderWithRedux(renderWithRouter(<Navbar />)));
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
