# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End to End test @endtoend
- Location: tests\EndToEndTest.spec.ts:44:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#input-firstname')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e67]:
    - generic [ref=e68]:
      - generic [ref=e70]:
        - img "MacBookAir" [ref=e72]
        - link "iPhone 6" [ref=e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e75]
        - img "MacBookAir" [ref=e77]
        - link "iPhone 6" [ref=e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e80]
      - generic:
        - generic [ref=e84] [cursor=pointer]: 
        - generic [ref=e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=e86]
    - generic [ref=e87]:
      - generic [ref=e89]:
        - link "MacBook" [ref=e91] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=e92]
        - generic [ref=e93]:
          - heading "MacBook" [level=4] [ref=e94]:
            - link "MacBook" [ref=e95] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=43
          - paragraph [ref=e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=e97]:
            - text: $602.00
            - generic [ref=e98]: "Ex Tax: $500.00"
        - generic [ref=e99]:
          - button " Add to Cart" [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: 
            - text: Add to Cart
          - button "" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]: 
          - button "" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]: 
      - generic [ref=e107]:
        - link "iPhone" [ref=e109] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=e110]
        - generic [ref=e111]:
          - heading "iPhone" [level=4] [ref=e112]:
            - link "iPhone" [ref=e113] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=40
          - paragraph [ref=e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=e115]:
            - text: $123.20
            - generic [ref=e116]: "Ex Tax: $101.00"
        - generic [ref=e117]:
          - button " Add to Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add to Cart
          - button "" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: 
          - button "" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: 
      - generic [ref=e125]:
        - link "Apple Cinema 30\"" [ref=e127] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=e128]
        - generic [ref=e129]:
          - heading "Apple Cinema 30\"" [level=4] [ref=e130]:
            - link "Apple Cinema 30\"" [ref=e131] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=42
          - paragraph [ref=e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=e133]:
            - text: $110.00 $122.00
            - generic [ref=e134]: "Ex Tax: $90.00"
        - generic [ref=e135]:
          - button " Add to Cart" [ref=e136] [cursor=pointer]:
            - generic [ref=e137]: 
            - text: Add to Cart
          - button "" [ref=e138] [cursor=pointer]:
            - generic [ref=e139]: 
          - button "" [ref=e140] [cursor=pointer]:
            - generic [ref=e141]: 
      - generic [ref=e143]:
        - link "Canon EOS 5D" [ref=e145] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=e146]
        - generic [ref=e147]:
          - heading "Canon EOS 5D" [level=4] [ref=e148]:
            - link "Canon EOS 5D" [ref=e149] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=product/product&product_id=30
          - paragraph [ref=e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=e151]:
            - text: $98.00 $122.00
            - generic [ref=e152]: "Ex Tax: $80.00"
        - generic [ref=e153]:
          - button " Add to Cart" [ref=e154] [cursor=pointer]:
            - generic [ref=e155]: 
            - text: Add to Cart
          - button "" [ref=e156] [cursor=pointer]:
            - generic [ref=e157]: 
          - button "" [ref=e158] [cursor=pointer]:
            - generic [ref=e159]: 
    - generic [ref=e160]:
      - generic [ref=e162]:
        - img "Harley Davidson" [ref=e164]
        - img "Dell" [ref=e166]
        - img "Disney" [ref=e168]
        - img "Starbucks" [ref=e170]
        - img "Nintendo" [ref=e172]
        - img "NFL" [ref=e174]
        - img "RedBull" [ref=e176]
        - img "Sony" [ref=e178]
        - img "Coca Cola" [ref=e180]
        - img "Burger King" [ref=e182]
        - img "Canon" [ref=e184]
        - img "Harley Davidson" [ref=e186]
        - img "Dell" [ref=e188]
        - img "Disney" [ref=e190]
        - img "Starbucks" [ref=e192]
        - img "Nintendo" [ref=e194]
        - img "NFL" [ref=e196]
        - img "RedBull" [ref=e198]
        - img "Sony" [ref=e200]
        - img "Coca Cola" [ref=e202]
        - img "Burger King" [ref=e204]
      - generic:
        - generic [ref=e217] [cursor=pointer]: 
        - generic [ref=e218] [cursor=pointer]: 
  - contentinfo [ref=e219]:
    - generic [ref=e220]:
      - generic [ref=e221]:
        - generic [ref=e222]:
          - heading "Information" [level=5] [ref=e223]
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "About Us" [ref=e226] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e227]:
              - link "Delivery Information" [ref=e228] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e229]:
              - link "Privacy Policy" [ref=e230] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e231]:
              - link "Terms & Conditions" [ref=e232] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e233]:
          - heading "Customer Service" [level=5] [ref=e234]
          - list [ref=e235]:
            - listitem [ref=e236]:
              - link "Contact Us" [ref=e237] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e238]:
              - link "Returns" [ref=e239] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e240]:
              - link "Site Map" [ref=e241] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e242]:
          - heading "Extras" [level=5] [ref=e243]
          - list [ref=e244]:
            - listitem [ref=e245]:
              - link "Brands" [ref=e246] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e247]:
              - link "Gift Certificates" [ref=e248] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e249]:
              - link "Affiliate" [ref=e250] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e251]:
              - link "Specials" [ref=e252] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e253]:
          - heading "My Account" [level=5] [ref=e254]
          - list [ref=e255]:
            - listitem [ref=e256]:
              - link "My Account" [ref=e257] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e258]:
              - link "Order History" [ref=e259] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e260]:
              - link "Wish List" [ref=e261] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e262]:
              - link "Newsletter" [ref=e263] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e264]
      - paragraph [ref=e265]:
        - text: Powered By
        - link "OpenCart" [ref=e266] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
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
> 40  |     await this.txtFirstName.fill(firstName);
      |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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
  81  |     await this.successMessage.waitFor({ state: 'visible' });
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