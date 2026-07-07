# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountregistration.spec.ts >> User registration test
- Location: tests\accountregistration.spec.ts:23:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Your Account Has Been Created!"
Received string:    "Register Account"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { RegistrationPage } from "../pages/RegistrationPage";
  4  | import { RandomDataUtils } from "../utils/randomdatagenerator";
  5  | import { TestConfig } from "../test.config";
  6  | 
  7  | let homePage: HomePage;
  8  | let regstrPage: RegistrationPage;
  9  | let testConfig: TestConfig;
  10 | 
  11 | test.beforeEach(async ({ page }) => {
  12 |   testConfig = new TestConfig();
  13 |   await page.goto(testConfig.appUrl);
  14 |   homePage = new HomePage(page);
  15 |   regstrPage = new RegistrationPage(page);
  16 | });
  17 | 
  18 | test.afterEach(async ({ page }) => {
  19 |   await page.waitForTimeout(2000);
  20 |   await page.close();
  21 | });
  22 | 
  23 | test("User registration test", async () => {
  24 |   await homePage.clickMyAccount();
  25 |   await homePage.clickRegister();
  26 |   await regstrPage.enterFirstName(RandomDataUtils.getFirstName());
  27 |   await regstrPage.enterLastName(RandomDataUtils.getLastName());
  28 |   await regstrPage.enterEmail(RandomDataUtils.getEmail());
  29 |   await regstrPage.enterTelephone(RandomDataUtils.getPhoneNumber());
  30 | 
  31 |   const password = RandomDataUtils.getRandomPassword();
  32 |   await regstrPage.enterPassword(password);
  33 |   await regstrPage.confirm_password(password);
  34 | 
  35 |   await regstrPage.agreeToPrivacyPolicy();
  36 |   await regstrPage.clickContinueButton();
  37 | //
  38 |   const successMessage = await regstrPage.getSuccessMessage();
> 39 |   expect(successMessage.trim()).toContain("Your Account Has Been Created!");
     |                                 ^ Error: expect(received).toContain(expected) // indexOf
  40 | });
  41 | 
```