import { test, expect } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyaccountPage";
import { TestConfig } from "../test.config";

let testConfig: TestConfig;
testConfig = new TestConfig();
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;


test.beforeEach(async ({ page }) => {
  
  await page.goto(testConfig.appUrl);

  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  myAccountPage = new MyAccountPage(page);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});

test("Valid user can log in", async () => {
  await homePage.clickMyAccount();
  await homePage.clickLogin();

  await loginPage.setEmailAddress(testConfig.email);
  await loginPage.setPassword(testConfig.password);
  await loginPage.clickLoginButton();

  expect(await myAccountPage.isMyAccountPageExist()).toBeTruthy();
});
