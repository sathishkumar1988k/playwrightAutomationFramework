const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');
const {
    request,
    expect
} = require('@playwright/test');


Given('the list of users GET request available in reqres.in', async function () {
    // Check the reqres.in page is working fine
});

When('the GET request is triggered to get the list of users', async function () {
    const context = await request.newContext({
        baseURL: 'https://reqres.in'
    });
    this.apiResponse = await context.get('/api/users?page=2');
    console.log(await this.apiResponse.json());
});

Given('the create user POST request available in reqres.in', async function () {
    // Check the reqres.in page is working fine
});

When('the POST request is triggered with name as {string} and job as {string}', async function (name, job) {
    const context = await request.newContext({
        baseURL: 'https://reqres.in'
    });
    this.apiResponse = await context.post('/api/users', {
        data: {
            "name": name,
            "job": job
        }
    });
    console.log(await this.apiResponse.json());
});

Then('verify response code is {int}', async function (getResponseCode) {
    expect(this.apiResponse.status()).toBe(getResponseCode);
});

Then('verify the response have {string}', async function (responseText) {
    const text = await this.apiResponse.text();
    expect(text).toContain(responseText);
});