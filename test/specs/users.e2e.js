const { expect } = require("@wdio/globals");
const UsersPage = require("../pageobjects/users.page");

describe("User page", () => {
  it("load data", async () => {
    await UsersPage.loadData();
  });

  it("delete user", async () => {
    await UsersPage.deleteUser();
  });
});
