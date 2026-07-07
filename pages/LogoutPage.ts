import { Page, expect, Locator } from "@playwright/test";
import { HomePage } from "./HomePage";

export class LogoutPage {
  private readonly page: Page;
  private readonly btnContinue: Locator;
   
  constructor(page: Page) {
    this.page = page;
   
    this.btnContinue = this.page
      .locator("a")
      .filter({ hasText: "Continue" })
      .last();
  }


  async clickContinueButton(): Promise<HomePage> {
        await this.btnContinue.click();
        return new HomePage(this.page);
    }

    async isLogoutPageExist(): Promise<boolean> {
        try {
            let title: string = await this.page.title();
            if (title) {
                return true;
            }else
            return false;
        } catch (error) {
            console.error("Error in isLogoutPageExist:", error);
            return false;
        }
    }

    async isContinueButtonVisible(): Promise<boolean> {
        try {
            return await this.btnContinue.isVisible();
        } catch (error) {
            console.error("Error in isContinueButtonVisible:", error);
            return false;
        }   
    }

    
}