import { Page, expect, Locator } from "@playwright/test";

export class HomePage {
  private readonly page: Page;
  //locators
  private readonly myAccount: Locator;
  private readonly lnkRegister: Locator;
  private readonly lnkLogin: Locator;
  private readonly txtSearch: Locator;
  private readonly btnSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = this.page
      .locator("span")
      .filter({ hasText: "My Account" });
    this.lnkRegister = this.page
      .locator("a")
      .filter({ hasText: "Register" })
      .last();
    this.lnkLogin = this.page.locator("a").filter({ hasText: "Login" }).last();
    this.txtSearch = this.page.getByRole("textbox", { name: "Search" });
    this.btnSearch = this.page.locator("button.btn.btn-default.btn-lg");
  }

  //action methods
  //check if HomePage exists
  async isHomePageExist(): Promise<boolean> {
    try {
      let title: string = await this.page.title();
      if (title) {
        return true;
      }else
      return false;
    } catch (error) {
      console.error("Error in isHomePageExist:", error);
      return false;
    }
  }

  async clickMyAccount() {
    try {
      await this.myAccount.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'My Account': ${error}`);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
  async clickRegister() {
    try {
      await this.lnkRegister.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'Register': ${error}`);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }

  async enterProductName(productName: string) {
    try {
      await this.txtSearch.fill(productName);
    } catch (error) {
      console.log(`Exception occured while entering product name: ${error}`);
      throw error;
    }
  }

  async clickSearchButton() {
    try {
      await this.btnSearch.click();
    } catch (error) {
      console.log(`Exception occured while clicking search button: ${error}`);
      throw error;
    }
  }
  async clickLogin() {
    try {
      await this.lnkLogin.click();
    } catch (error) {
      console.log(`Exception occured while clicking 'Login': ${error}`);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }
}
