# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.ts >> User Logout test @regression @master
- Location: tests\logout.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { LoginPage } from "../pages/LoginPage";
  4  | import { MyAccountPage } from "../pages/MyAccountPage";
  5  | import { DataProvider } from "../utils/dataprovider";
  6  | import { TestConfig } from "../test.config";
  7  | import { LogoutPage } from "../pages/LogoutPage";
  8  | 
  9  | //declare variables for page objects and test data
  10 | let config: TestConfig;
  11 | let homePage: HomePage;
  12 | let loginPage: LoginPage;
  13 | let myAccountPage: MyAccountPage;
  14 | let logoutPage: LogoutPage;
  15 | 
  16 | test.beforeEach(async ({ page }) => {
  17 |   config = new TestConfig();
  18 |   await page.goto(config.appUrl);
  19 |   //initialize page objects
  20 | 
  21 |   homePage = new HomePage(page);
  22 |   loginPage = new LoginPage(page);
  23 |   myAccountPage = new MyAccountPage(page);
  24 |   logoutPage = new LogoutPage(page);
  25 | 
  26 | });
  27 | 
  28 | test.afterEach(async ({ page }) => {
  29 |     await page.close();
  30 | });
  31 | 
  32 | test("User Logout test @regression @master", async ({ page }) => {
  33 | 
  34 |     //login to the application
  35 |     homePage.clickMyAccount();
  36 |     homePage.clickLogin();
  37 |     await loginPage.login(config.email, config.password);
  38 | 
  39 |     //verify that user is logged in successfully
  40 |     const isMyAccountPageVisible = await myAccountPage.isMyAccountPageExist();
  41 |     expect(isMyAccountPageVisible).toBeTruthy();
  42 |     await page.waitForTimeout(2000);
  43 |     //click on Logout link
  44 |     await myAccountPage.clickLogoutLink();
  45 |     await page.waitForTimeout(2000);
  46 |     //verify that the continue button is visivble on the Logout page
  47 |     const isContinueButtonVisible = await logoutPage.isContinueButtonVisible();
> 48 |     expect(isContinueButtonVisible).toBeTruthy();
     |                                     ^ Error: expect(received).toBeTruthy()
  49 | 
  50 |     //click on Continue button to navigate back to Home page
  51 |     await logoutPage.clickContinueButton();
  52 | 
  53 |     //verify that user is navigated back to Home page
  54 |     const isHomePageVisible = await homePage.isHomePageExist();
  55 |     expect(isHomePageVisible).toBeTruthy();
  56 |     });
  57 | 
```