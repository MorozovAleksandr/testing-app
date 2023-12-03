const { expect } = require("@wdio/globals");
const HelloPage = require("../pageobjects/hello.page");

describe("My hello page", () => {
  it("correct title visible", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitle("hello");
    await expect(HelloPage.helloTitle).toBeExisting();

    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("not title visible", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitle("1337");
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
