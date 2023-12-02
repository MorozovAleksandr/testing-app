import { renderWithRouter } from "./helpers/renderWithRouter";

import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar test", () => {
  test("about link", () => {
    render(renderWithRouter(<Navbar />));
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("main link", () => {
    render(renderWithRouter(<Navbar />));
    const mainLimnk = screen.getByTestId("main-link");
    userEvent.click(mainLimnk);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("user link", () => {
    render(renderWithRouter(<Navbar />));
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
