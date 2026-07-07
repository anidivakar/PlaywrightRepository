import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtils } from "../utils/randomdatagenerator";
import { TestConfig } from "../test.config";

let homePage: HomePage;
let regstrPage: RegistrationPage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
  testConfig = new TestConfig();
  await page.goto(testConfig.appUrl);
  homePage = new HomePage(page);
  regstrPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});

test("User registration test", async () => {
  await homePage.clickMyAccount();
  await homePage.clickRegister();
  await regstrPage.enterFirstName(RandomDataUtils.getFirstName());
  await regstrPage.enterLastName(RandomDataUtils.getLastName());
  await regstrPage.enterEmail(RandomDataUtils.getEmail());
  await regstrPage.enterTelephone(RandomDataUtils.getPhoneNumber());

  const password = RandomDataUtils.getRandomPassword();
  await regstrPage.enterPassword(password);
  await regstrPage.confirm_password(password);

  await regstrPage.agreeToPrivacyPolicy();
  await regstrPage.clickContinueButton();
//
  const successMessage = await regstrPage.getSuccessMessage();
  expect(successMessage.trim()).toContain("Your Account Has Been Created!");
});
