import {test, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import {TestConfig} from "../test.config";
import {SearchResultsPage} from "../pages/SearchResultsPage";



//declare variables for page objects and test data
let testConfig: TestConfig;
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;

test.beforeEach(async ({ page }) => {
    testConfig = new TestConfig();
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await page.goto(testConfig.appUrl); 
});

test.afterEach(async ({ page }) => {
    await page.close();
}); 

test("Search Product test @regression @master", async ({ page }) => {
    
    //verify that Home page is displayed
    if(await homePage.isHomePageExist())
        {
            // Perform search action
            await homePage.enterProductName(testConfig.productName);
            await homePage.clickSearchButton();
            //verify that search results page is displayed
           expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
            //verify that the searched product is displayed in the search results
            const isProductFound = await searchResultsPage.isProductExist(testConfig.productName);
            expect(isProductFound).toBeTruthy();
        }    

});


