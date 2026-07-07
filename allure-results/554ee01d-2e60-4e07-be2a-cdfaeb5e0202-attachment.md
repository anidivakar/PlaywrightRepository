# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Valid user can log in
- Location: tests\login.spec.ts:29:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[value="login"]')

```

# Test source

```ts
  1  | import {Page,Locator,expect} from "@playwright/test";
  2  | import { TestConfig } from "../test.config"; 
  3  | 
  4  | export class LoginPage{
  5  | 
  6  |     private readonly page: Page;
  7  |     //locators
  8  |     private readonly txtEmailAddress: Locator;
  9  |     private readonly txtPassword: Locator;
  10 |     private readonly btnLogin: Locator;
  11 |     private readonly txtErrorMessage: Locator;   
  12 | 
  13 |     constructor(page: Page){
  14 |         this.page = page;
  15 |         this.txtEmailAddress = page.locator('#input-email');
  16 |         this.txtPassword = page.locator('#input-password');
  17 |         this.btnLogin = page.locator('input[value="login"]');
  18 |         this.txtErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');       
  19 |     }
  20 | 
  21 |     async setEmailAddress(email: string): Promise<void> {
  22 |     await this.txtEmailAddress.fill(email);
  23 |     }   
  24 | 
  25 |     async setPassword(password: string): Promise<void> {
  26 |     await this.txtPassword.fill(password);
  27 |     }
  28 | 
  29 |     async clickLoginButton(): Promise<void> {
> 30 |     await this.btnLogin.click();
     |                         ^ Error: locator.click: Target page, context or browser has been closed
  31 |     }
  32 | 
  33 |     async getErrorMessage(): Promise<string> {
  34 |     return await this.txtErrorMessage.textContent() || '';
  35 |     }
  36 | 
  37 |     async login(email: string, password: string): Promise<void> {
  38 |     await this.setEmailAddress(email);
  39 |     await this.setPassword(password);
  40 |     await this.clickLoginButton();
  41 |     }   
  42 | 
  43 | }    
  44 | 
  45 | 
  46 | 
  47 | 
```