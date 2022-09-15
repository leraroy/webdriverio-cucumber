const { Given, When, Then } = require('@wdio/cucumber-framework');
const { default: resources } = require('../resources');

Given('I am on the login page', async () =>{
    browser.url('/');
  });

  When('I login with {string} and {string}', async (username, password)=> {
    await $('[name="username"]').setValue(username);
    await $('[name="password"]').setValue(password);
    await $('[type="submit"]').click();
  });

  Then('I should see a flash message saying {string}', async (text)=> {
    await browser.pause(5000);
    await expect(await $('[role="alert"] p')).toHaveText(text);
  });

  When('I login  with {string} and {string}', async (username, password) => {
    await $('[name="username"]').setValue(username);
    await browser.pause(5000);
    await $('[name="password"]').setValue(password);
    await browser.pause(5000);
    await $('[type="submit"]').click();
    await browser.pause(5000);
});
  
  Then('I should see right url', async ()=>{
    await expect(await browser).toHaveUrl(await resources.urlAfterLogin);
  })
