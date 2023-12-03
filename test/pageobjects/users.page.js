const Page = require("./page");
const { $, browser } = require("@wdio/globals");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    //return browser.react$$("User");
    return $$(".user-item");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    try {
      const userCount = await this.usersItems.length;

      if (!userCount) {
        throw new Error("Пользователи не найдены");
      }

      await this.usersItems[0].$("#user-delete").click();
      const userCountAfterDelete = await this.usersItems.length;

      if (userCount - userCountAfterDelete !== 1) {
        throw new Error(
          "Удаление не произошло или удалился более чем 1 пользователь"
        );
      }
    } catch (e) {
      throw new Error(`Не удалось удалить пользователя ${e.message}`);
    }
  }

  open() {
    return super.open("/users-test");
  }
}

module.exports = new UsersPage();
