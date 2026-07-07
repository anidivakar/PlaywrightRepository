# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.ts >> User Logout test @regression @master
- Location: tests\logout.spec.ts:32:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a').filter({ hasText: 'Logout' }) resolved to 2 elements:
    1) <a href="http://localhost/opencart/upload/index.php?route=account/logout">Logout</a> aka locator('#top-links').getByText('Logout')
    2) <a class="list-group-item" href="http://localhost/opencart/upload/index.php?route=account/logout">Logout</a> aka getByRole('link', { name: 'Logout' })

Call log:
  - waiting for locator('a').filter({ hasText: 'Logout' })

```

# Test source

```ts
  1  | import { Page, expect, Locator } from "@playwright/test";
  2  | import { TestConfig } from "../test.config";
  3  | import { LogoutPage } from "./LogoutPage";
  4  | export class MyAccountPage {
  5  |   private readonly page: Page;
  6  |   private readonly lnkLogout: Locator;
  7  |   private readonly msgHeading: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     this.msgHeading = this.page.locator('h2:has-text("My Account")');
  12 |     this.lnkLogout = this.page.locator("a").filter({ hasText: "Logout" });
  13 |   }
  14 | 
  15 |   //varifies if MyAccountPage is displayed
  16 |   async isMyAccountPageExist(): Promise<boolean> {
  17 |     try {
  18 |       let title: string = await this.page.title();
  19 |       if (title) {
  20 |         return true;
  21 |       }
  22 |       return true;
  23 |     } catch (error) {
  24 |       console.error("Error in isMyAccountPageExist:", error);
  25 |       return false;
  26 |     }
  27 |   }
  28 | 
  29 |   //clicks on Logout link
  30 |   async clickLogoutLink(): Promise<LogoutPage> {
  31 |     try {
> 32 |       await this.lnkLogout.click();
     |                            ^ Error: locator.click: Error: strict mode violation: locator('a').filter({ hasText: 'Logout' }) resolved to 2 elements:
  33 |       return new LogoutPage(this.page);
  34 |     } catch (error) {
  35 |       console.log(`Exception occured while clicking 'Logout' link: ${error}`);
  36 |       throw error; // Rethrow the error to propagate it to the caller
  37 |     }
  38 |   }
  39 | 
  40 |     //verifies if MyAccountPage heading is displayed
  41 |     async isMyAccountHeadingDisplayed(): Promise<boolean> {
  42 |         try {
  43 |             return await this.msgHeading.isVisible();
  44 |         } catch (error) {
  45 |             console.error("Error in isMyAccountHeadingDisplayed:", error);
  46 |             return false;   
  47 |         }
  48 |     }
  49 | 
  50 |     
  51 | }
  52 | 
```