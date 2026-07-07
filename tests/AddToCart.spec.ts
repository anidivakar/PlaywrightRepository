import {test , expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductPage } from "../pages/ProductPage";

//declare variables for page objects and test data
let testConfig: TestConfig;
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;
let productPage: ProductPage;

//beforeEach hook to initialize page objects and navigate to the application URL
test.beforeEach(async ({ page }) => {
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);
    
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Add Product to Cart test @regression @master", async ({ page }) => {
    //verify that Home page is displayed
    if(await homePage.isHomePageExist()) {
        //perform test steps
        await homePage.enterProductName(testConfig.productName);
        await homePage.clickSearchButton();
       
    }

     //verify that search results page is displayed
        expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

    //verify that the searched product is displayed in the search results
    expect(await searchResultsPage.isProductExist(testConfig.productName)).toBeTruthy();

    //select the product from the search results
   await searchResultsPage.selectProduct(testConfig.productName);

    //set the quantity of the product
    productPage.setQuantity(testConfig.productQuantity);
    productPage.addProductToCart(testConfig.productQuantity);

    //verify that the confirmation message is displayed
   expect( productPage.isConfirmationMessageVisible()).toBeTruthy();
   

});
