import { expect, test, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";
import { DataProvider } from "../utils/dataprovider";

import { RegistrationPage } from "../pages/RegistrationPage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductPage } from "../pages/ProductPage";
import { MyAccountPage } from "../pages/MyaccountPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";
import { LogoutPage } from "../pages/LogoutPage";
import { RandomDataUtils } from "../utils/randomdatagenerator";

let testConfig: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let registrationPage: RegistrationPage;
let searchResultsPage: SearchResultsPage;
let productPage: ProductPage;
let myAccountPage: MyAccountPage;
let shoppingCartPage: ShoppingCartPage;
let logoutPage: LogoutPage;
let dataProvider: DataProvider;

test.beforeEach(async ({ page }) => {
  testConfig = new TestConfig();
  await page.goto(testConfig.appUrl);
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  registrationPage = new RegistrationPage(page);
  searchResultsPage = new SearchResultsPage(page);
  productPage = new ProductPage(page);
  myAccountPage = new MyAccountPage(page);
  shoppingCartPage = new ShoppingCartPage(page);
  logoutPage = new LogoutPage(page);
  dataProvider = new DataProvider();
});

test.afterEach(async ({ page }) => {
  //await page.close();
});

test("End to End test @endtoend", async ({ page }) => {
  //new user registration
  homePage.clickMyAccount();
  homePage.clickRegister();
  const email = await registerNewUser();
  await logOut(page);

  await performLogin(email);
});

async function registerNewUser(): Promise<string> {
  await registrationPage.enterFirstName(RandomDataUtils.getFirstName());
  await registrationPage.enterLastName(RandomDataUtils.getLastName());
  const email = RandomDataUtils.getEmail();
  await registrationPage.enterEmail(email);
  await registrationPage.enterTelephone(RandomDataUtils.getPhoneNumber());

  await registrationPage.enterPassword("test123");
  await registrationPage.confirm_password("test123");
  await registrationPage.selectSubscribeOption(true);
  await registrationPage.agreeToPrivacyPolicy();
  await registrationPage.clickContinueButton();

  await registrationPage.verifySuccessMessage("Your Account Has Been Created!");

  return email;
}

async function logOut(page: Page): Promise<void> {
  
  const booleanStatus: boolean = await logoutPage.isLogoutPageExist();
  if (booleanStatus) {
   
    const logoutpage: LogoutPage = await myAccountPage.clickLogoutLink();
    expect(await logoutpage.isContinueButtonVisible()).toBe(true);

    const returnedHomePage = await logoutpage.clickContinueButton();
    await page.waitForLoadState("networkidle");

    expect(await returnedHomePage.isHomePageExist()).toBe(true);
  }
}

async function performLogin(email: string): Promise<void> {
  await homePage.clickMyAccount();
  await homePage.clickLogin();
  await loginPage.login(email, "test123");
  expect(await myAccountPage.isMyAccountPageExist()).toBeTruthy();
}

async function addProductToCart(page: Page): Promise<void> {
  const productName: string = testConfig.productName;
  const productQty: string = testConfig.productQuantity;

  await homePage.enterProductName(productName);
  await homePage.clickSearchButton();
  expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

  expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  const productsPage = await searchResultsPage.selectProduct(productName);

  await productsPage?.setQuantity(productQty);
  await productsPage?.addToCart();

  await page.waitForTimeout(3000);

  expect(await productsPage?.isConfirmationMessageVisible()).toBeTruthy();
}

async function verifyShoppingCart(): Promise<void> {
  await productPage.clickItemsToNavigateToCart();
  const shoppingCartpage: ShoppingCartPage = await productPage.clickViewCart();

  expect(await shoppingCartPage.getTotalPrice()).toEqual(testConfig.totalPrice);
}
