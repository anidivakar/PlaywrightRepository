import {Page,Locator,expect} from "@playwright/test";
import { TestConfig } from "../test.config"; 

export class LoginPage{

    private readonly page: Page;
    //locators
    private readonly txtEmailAddress: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMessage: Locator;   

    constructor(page: Page){
        this.page = page;
        this.txtEmailAddress = page.locator('#input-email');
        this.txtPassword = page.locator('#input-password');
        this.btnLogin = page.locator('input[value="Login"]');
        this.txtErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');       
    }

    async setEmailAddress(email: string): Promise<void> {
    await this.txtEmailAddress.fill(email);
    }   

    async setPassword(password: string): Promise<void> {
    await this.txtPassword.fill(password);
    }

    async clickLoginButton(): Promise<void> {
    await this.btnLogin.click();
    }

    async getErrorMessage(): Promise<string> {
    return await this.txtErrorMessage.textContent() || '';
    }

    async login(email: string, password: string): Promise<void> {
    await this.setEmailAddress(email);
    await this.setPassword(password);
    await this.clickLoginButton();
    }   

}    



