import { test, expect } from '@playwright/test';

test('Verify user successfully logged into practice testAutomation page',{tag:['@Web','@Regression']}, async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator("[name='username']").fill("student"); // Enter the user name in the user name field
    await page.locator("#password").fill("Password123"); // Enter the password in the password field
    await page.locator("[id='submit']").click(); // Click on Submit button
    await expect(page.locator("[class='post-title']")).toContainText("Logged In Successfully");
});

test('Verify invalid username error message is dsiplayed on practice testAutomation page',{tag:['@Web','@Regression']}, async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator("[name='username']").fill("Sathish"); // Enter the user name in the user name field
    await page.locator("#password").fill("password"); // Enter the password in the password field
    await page.locator("[id='submit']").click(); // Click on Submit button
    await expect(page.locator("[id='error']")).toContainText("Your username is invalid!");
});

test('Launch google page with browser context', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
});

test('Launch google page with page fixture', async({page}) => {
    await page.goto('https://www.google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});

test('First test case with page fixture with only annotation', async({page}) => {
    await page.goto('https://www.testwise.com/platform/login');
    console.log(await page.title());  // Print the page title
    await expect(page).toHaveTitle('Log in'); // Verify the page title
    await page.getByText('Accept All').click(); // click on "Accept All" button
    await page.locator("[name='UserName']").fill("Sathish"); // Enter the user name in the user name field
    await page.locator("#Password").fill("Sathish"); // Enter the password in the password field
    await page.locator("[id='btnLogin']").click(); // CLick on Login button
});
