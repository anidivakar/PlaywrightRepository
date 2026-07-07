import { Page,expect,Locator } from '@playwright/test';

export class RegistrationPage {

private readonly page: Page;

//locators
private readonly txtFirstName: Locator;
private readonly txtLastName: Locator;
private readonly txtEmail: Locator;
private readonly txtTelephone: Locator;
private readonly txtPassword: Locator;
private readonly txtConfirmPassword: Locator;
private readonly chkPrivacyPolicy: Locator;
private readonly btnContinue: Locator;
private readonly successMessage: Locator;
private readonly radioSubscribeYes: Locator;
private readonly radioSubscribeNo: Locator;

constructor(page: Page){

    this.page = page;
    //initializing locators
   
    this.txtFirstName = this.page.locator('#input-firstname');
    this.txtLastName = this.page.locator('#input-lastname');
    this.txtEmail = this.page.locator('#input-email');
    this.txtTelephone = this.page.locator('#input-telephone');
    this.txtPassword = this.page.locator('#input-password');
    this.txtConfirmPassword = this.page.locator('#input-confirm');
    this.chkPrivacyPolicy = this.page.locator('input[name="agree"]');
    this.btnContinue = this.page.locator('input[type="submit"]');
    this.successMessage = this.page.locator('div#content h1');
    this.radioSubscribeYes = this.page.locator('input[name="newsletter"][value="1"]');
    this.radioSubscribeNo = this.page.locator('input[name="newsletter"][value="0"]');
    
}

async enterFirstName(firstName: string): Promise<void> {
    await this.txtFirstName.fill(firstName);
}

async enterLastName(lastName: string): Promise<void> {
    await this.txtLastName.fill(lastName);
}

async enterEmail(email: string): Promise<void> {
    await this.txtEmail.fill(email);
}

async enterTelephone(telephone: string): Promise<void> {
    await this.txtTelephone.fill(telephone);
}

async enterPassword(password: string): Promise<void> {
    await this.txtPassword.fill(password);
}

async confirm_password(confirmPassword: string): Promise<void> {
    await this.txtConfirmPassword.fill(confirmPassword);
}

async selectSubscribeOption(subscribe: boolean): Promise<void> {
    if (subscribe) {
        await this.radioSubscribeYes.check();
    } else {
        await this.radioSubscribeNo.check();
    }   

 }

 async agreeToPrivacyPolicy(): Promise<void> {
    await this.chkPrivacyPolicy.check();        
 }

async clickContinueButton(): Promise<void> {
    await this.btnContinue.click(); 
}

async getSuccessMessage(): Promise<string> { 
    await this.successMessage.waitFor({ state: 'visible' });
    return await this.successMessage.textContent() || '';
}

async isSuccessMessageVisible(): Promise<boolean> {
    return await this.successMessage.isVisible();
}

async verifySuccessMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.getSuccessMessage();
    expect(actualMessage.trim()).toBe(expectedMessage); 
}

async isPrivacyPolicyChecked(): Promise<boolean> {
    return await this.chkPrivacyPolicy.isChecked();
}

async isSubscribeYesChecked(): Promise<boolean> {
    return await this.radioSubscribeYes.isChecked();
}

async isSubscribeNoChecked(): Promise<boolean> {
    return await this.radioSubscribeNo.isChecked(); 
}

async isContinueButtonEnabled(): Promise<boolean> {
    return await this.btnContinue.isEnabled();
}

async isContinueButtonVisible(): Promise<boolean> { 
    return await this.btnContinue.isVisible();
}

async getConfigMessage(): Promise<string> {
    return await this.page.locator('div.alert.alert-danger').textContent() || '';
}

async completeRegistration(userdata:{
                            firstName:string,
                            lastName:string,
                            email:string,
                            telephone:string,
                            password:string,
                            subscribe:boolean}): Promise<void> {
                    await this.enterFirstName(userdata.firstName);
                    await this.enterLastName(userdata.lastName);
                    await this.enterEmail(userdata.email);
                    await this.enterTelephone(userdata.telephone);
                    await this.enterPassword(userdata.password);
                    await this.confirm_password(userdata.password);
                    await this.selectSubscribeOption(userdata.subscribe);
                    await this.agreeToPrivacyPolicy();
                    await this.clickContinueButton();
}



}