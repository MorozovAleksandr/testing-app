import { renderWithRouter } from "./helpers/renderWithRouter";

import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../store/store";

describe("Navbar test", () => {
  test("about link", () => {
    render(
      <Provider store={createReduxStore()}>
        {renderWithRouter(<Navbar />)}
      </Provider>
    );
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("main link", () => {
    render(
      <Provider store={createReduxStore()}>
        {renderWithRouter(<Navbar />)}
      </Provider>
    );
    const mainLimnk = screen.getByTestId("main-link");
    userEvent.click(mainLimnk);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("user link", () => {
    render(
      <Provider store={createReduxStore()}>
        {renderWithRouter(<Navbar />)}
      </Provider>
    );
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
