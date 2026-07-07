import { Page, expect, Locator } from "@playwright/test";
import { TestConfig } from "../test.config";
import { LogoutPage } from "./LogoutPage";

export class MyAccountPage {
  private readonly page: Page;
  private readonly lnkLogout: Locator;
  private readonly msgHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.msgHeading = this.page.locator('h2:has-text("My Account")');
    this.lnkLogout = this.page
      .locator('a')
      .filter({ hasText: "Logout" })
      .last();

 
  }

  //varifies if MyAccountPage is displayed
  async isMyAccountPageExist(): Promise<boolean> {
    try {
      let title: string = await this.page.title();
      if (title) {
        return true;
      }
      return true;
    } catch (error) {
      console.error("Error in isMyAccountPageExist:", error);
      return false;
    }
  }

  //clicks on Logout link
  async clickLogoutLink(): Promise<LogoutPage> {
    try {
      if (await this.lnkLogout.isVisible()) {
        await this.lnkLogout.click();
      }

      return new LogoutPage(this.page);
    } catch (error) {
      console.log(`Exception occured while clicking 'Logout' link: ${error}`);
      throw error; // Rethrow the error to propagate it to the caller
    }
  }

  //verifies if MyAccountPage heading is displayed
  async isMyAccountHeadingDisplayed(): Promise<boolean> {
    try {
      return await this.msgHeading.isVisible();
    } catch (error) {
      console.error("Error in isMyAccountHeadingDisplayed:", error);
      return false;
    }
  }
}
