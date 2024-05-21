import { test, expect } from '@playwright/test';

test('GET request in playwright',{tag:['@Api','@Smoke']}, async({request}) => {
    const apiResponse = await request.get('https://reqres.in/api/users?page=2');
    console.log("apiResponse"+JSON.stringify(apiResponse));
    expect(apiResponse.status()).toBe(200);
    const text = await apiResponse.text();
    expect(text).toContain('Michael');
});

test('POST request in playwright',{tag:['@Api','@Smoke']}, async({request}) => {
    const apiResponse = await request.post('https://reqres.in/api/users',{data:{
        "name":"sathish",
        "job":"SDET"
    }});
    console.log(await apiResponse.json());
    expect(apiResponse.status()).toBe(201);
    const text = await apiResponse.text();
    expect(text).toContain('sathish');
});


