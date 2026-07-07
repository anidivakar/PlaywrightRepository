import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyaccountPage";
import { DataProvider } from "../utils/dataprovider";
import { TestConfig } from "../test.config";
import { LogoutPage } from "../pages/LogoutPage";

//declare variables for page objects and test data
let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;

test.beforeEach(async ({ page }) => {
  config = new TestConfig();
  await page.goto(config.appUrl);
  //initialize page objects

  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  myAccountPage = new MyAccountPage(page);
  logoutPage = new LogoutPage(page);

});

test.afterEach(async ({ page }) => {
    await page.close();
});

test("User Logout test @regression @master", async ({ page }) => {

    //login to the application
    homePage.clickMyAccount();
    homePage.clickLogin();
    await loginPage.login(config.email, config.password);

    //verify that user is logged in successfully
    const isMyAccountPageVisible = await myAccountPage.isMyAccountPageExist();
    expect(isMyAccountPageVisible).toBeTruthy();

    //click on Logout link
    await myAccountPage.clickLogoutLink();
    await page.waitForTimeout(2000);
    //verify that the continue button is visivble on the Logout page
    const isContinueButtonVisible = await logoutPage.isContinueButtonVisible();
    expect(isContinueButtonVisible).toBeTruthy();

    //click on Continue button to navigate back to Home page
    await logoutPage.clickContinueButton();

    //verify that user is navigated back to Home page
    const isHomePageVisible = await homePage.isHomePageExist();
    expect(isHomePageVisible).toBeTruthy();
    });
