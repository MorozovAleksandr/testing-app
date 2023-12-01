import { render, screen } from "@testing-library/react";
import Users from "../pages/UsersPage/Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UsersDeatailsPage from "../pages/UsersDeatailsPage/UsersDeatailsPage";

jest.mock("axios");

describe("Users test", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("users get and length", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(4);
    expect(users.length).not.toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("test redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersDeatailsPage />} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    userEvent.click(users[0]);
    expect(screen.getByTestId("userdetails-page")).toBeInTheDocument();
  });
});
