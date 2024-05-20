const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');
const {
    chromium,expect
} = require('@playwright/test');

Given('the user lauch the practice test automation website', async function () {
    const browser = await chromium.launch({headless:false});
    this.page = await browser.newPage();
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
});

When('the user enter {string} as username and {string} as passwod and click on Submit button', async function (username, password) {
    await this.page.locator("[name='username']").fill(username); // Enter the user name in the user name field
    await this.page.locator("#password").fill(password); // Enter the password in the password field
    await this.page.locator("[id='submit']").click(); // Click on Submit button
});

Then('verify invalid username error message is displayed', async function () {
    await expect(this.page.locator("[id='error']")).toContainText("Your username is invalid!");
});