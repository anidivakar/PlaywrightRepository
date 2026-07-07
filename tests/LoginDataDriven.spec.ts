import {test,expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import {MyAccountPage} from "../pages/MyaccountPage";
import {DataProvider} from "../utils/dataprovider";
import {TestConfig} from "../test.config";

//load test data from JSON file

const jsonPath = 'testdata/logindata.json';

const loginData = DataProvider.getTestDataFromJSON(jsonPath);

for(const data of loginData){
   test(`Login test with json data: ${data.testName} @datadriven`, async ({page})=>{

    const testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
    const homePage = new HomePage(page);
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    const loginPage = new LoginPage(page);
    await loginPage.login(data.email,data.password);

    if(data.expected.toLowerCase() === "success")
    {
        const myAccountPage = new MyAccountPage(page);
        const isMyAccountPageVisible = await myAccountPage.isMyAccountPageExist();
        expect(isMyAccountPageVisible).toBeTruthy();  
    }
    else
        if(data.expected.toLowerCase() === "failure")
        {
        const loginPage = new LoginPage(page);
        const errorMessage = (await loginPage.getErrorMessage()).trim();
        expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
        }

   }) 

}

   //load test data from CSV file

const csvPath = 'testdata/logindata.csv';

const csvloginData = DataProvider.getTestDataFromCSV(csvPath);

for(const data of csvloginData){
   test(`Login test with csv data: ${data.testName} @datadriven`, async ({page})=>{

    const testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
    const homePage = new HomePage(page);
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    const loginPage = new LoginPage(page);
    await loginPage.login(data.email,data.password);

    if(data.expected.toLowerCase() === "success")
    {
        const myAccountPage = new MyAccountPage(page);
        const isMyAccountPageVisible = await myAccountPage.isMyAccountPageExist();
        expect(isMyAccountPageVisible).toBeTruthy();  
    }
    else
        if(data.expected.toLowerCase() === "failure")
        {
        const loginPage = new LoginPage(page);
        const errorMessage = (await loginPage.getErrorMessage()).trim();
        expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
        }
    
   }) 
}