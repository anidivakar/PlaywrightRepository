# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End to End test @regression @master
- Location: tests\EndToEndTest.spec.ts:44:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('div#content h1') to be visible

```

# Test source

```ts
  1   | import { Page,expect,Locator } from '@playwright/test';
  2   | 
  3   | export class RegistrationPage {
  4   | 
  5   | private readonly page: Page;
  6   | 
  7   | //locators
  8   | private readonly txtFirstName: Locator;
  9   | private readonly txtLastName: Locator;
  10  | private readonly txtEmail: Locator;
  11  | private readonly txtTelephone: Locator;
  12  | private readonly txtPassword: Locator;
  13  | private readonly txtConfirmPassword: Locator;
  14  | private readonly chkPrivacyPolicy: Locator;
  15  | private readonly btnContinue: Locator;
  16  | private readonly successMessage: Locator;
  17  | private readonly radioSubscribeYes: Locator;
  18  | private readonly radioSubscribeNo: Locator;
  19  | 
  20  | constructor(page: Page){
  21  | 
  22  |     this.page = page;
  23  |     //initializing locators
  24  |    
  25  |     this.txtFirstName = this.page.locator('#input-firstname');
  26  |     this.txtLastName = this.page.locator('#input-lastname');
  27  |     this.txtEmail = this.page.locator('#input-email');
  28  |     this.txtTelephone = this.page.locator('#input-telephone');
  29  |     this.txtPassword = this.page.locator('#input-password');
  30  |     this.txtConfirmPassword = this.page.locator('#input-confirm');
  31  |     this.chkPrivacyPolicy = this.page.locator('input[name="agree"]');
  32  |     this.btnContinue = this.page.locator('input[type="submit"]');
  33  |     this.successMessage = this.page.locator('div#content h1');
  34  |     this.radioSubscribeYes = this.page.locator('input[name="newsletter"][value="1"]');
  35  |     this.radioSubscribeNo = this.page.locator('input[name="newsletter"][value="0"]');
  36  |     
  37  | }
  38  | 
  39  | async enterFirstName(firstName: string): Promise<void> {
  40  |     await this.txtFirstName.fill(firstName);
  41  | }
  42  | 
  43  | async enterLastName(lastName: string): Promise<void> {
  44  |     await this.txtLastName.fill(lastName);
  45  | }
  46  | 
  47  | async enterEmail(email: string): Promise<void> {
  48  |     await this.txtEmail.fill(email);
  49  | }
  50  | 
  51  | async enterTelephone(telephone: string): Promise<void> {
  52  |     await this.txtTelephone.fill(telephone);
  53  | }
  54  | 
  55  | async enterPassword(password: string): Promise<void> {
  56  |     await this.txtPassword.fill(password);
  57  | }
  58  | 
  59  | async confirm_password(confirmPassword: string): Promise<void> {
  60  |     await this.txtConfirmPassword.fill(confirmPassword);
  61  | }
  62  | 
  63  | async selectSubscribeOption(subscribe: boolean): Promise<void> {
  64  |     if (subscribe) {
  65  |         await this.radioSubscribeYes.check();
  66  |     } else {
  67  |         await this.radioSubscribeNo.check();
  68  |     }   
  69  | 
  70  |  }
  71  | 
  72  |  async agreeToPrivacyPolicy(): Promise<void> {
  73  |     await this.chkPrivacyPolicy.check();        
  74  |  }
  75  | 
  76  | async clickContinueButton(): Promise<void> {
  77  |     await this.btnContinue.click(); 
  78  | }
  79  | 
  80  | async getSuccessMessage(): Promise<string> { 
> 81  |     await this.successMessage.waitFor({ state: 'visible' });
      |                               ^ Error: locator.waitFor: Target page, context or browser has been closed
  82  |     return await this.successMessage.textContent() || '';
  83  | }
  84  | 
  85  | async isSuccessMessageVisible(): Promise<boolean> {
  86  |     return await this.successMessage.isVisible();
  87  | }
  88  | 
  89  | async verifySuccessMessage(expectedMessage: string): Promise<void> {
  90  |     const actualMessage = await this.getSuccessMessage();
  91  |     expect(actualMessage.trim()).toBe(expectedMessage); 
  92  | }
  93  | 
  94  | async isPrivacyPolicyChecked(): Promise<boolean> {
  95  |     return await this.chkPrivacyPolicy.isChecked();
  96  | }
  97  | 
  98  | async isSubscribeYesChecked(): Promise<boolean> {
  99  |     return await this.radioSubscribeYes.isChecked();
  100 | }
  101 | 
  102 | async isSubscribeNoChecked(): Promise<boolean> {
  103 |     return await this.radioSubscribeNo.isChecked(); 
  104 | }
  105 | 
  106 | async isContinueButtonEnabled(): Promise<boolean> {
  107 |     return await this.btnContinue.isEnabled();
  108 | }
  109 | 
  110 | async isContinueButtonVisible(): Promise<boolean> { 
  111 |     return await this.btnContinue.isVisible();
  112 | }
  113 | 
  114 | async getConfigMessage(): Promise<string> {
  115 |     return await this.page.locator('div.alert.alert-danger').textContent() || '';
  116 | }
  117 | 
  118 | async completeRegistration(userdata:{
  119 |                             firstName:string,
  120 |                             lastName:string,
  121 |                             email:string,
  122 |                             telephone:string,
  123 |                             password:string,
  124 |                             subscribe:boolean}): Promise<void> {
  125 |                     await this.enterFirstName(userdata.firstName);
  126 |                     await this.enterLastName(userdata.lastName);
  127 |                     await this.enterEmail(userdata.email);
  128 |                     await this.enterTelephone(userdata.telephone);
  129 |                     await this.enterPassword(userdata.password);
  130 |                     await this.confirm_password(userdata.password);
  131 |                     await this.selectSubscribeOption(userdata.subscribe);
  132 |                     await this.agreeToPrivacyPolicy();
  133 |                     await this.clickContinueButton();
  134 | }
  135 | 
  136 | 
  137 | 
  138 | }
```