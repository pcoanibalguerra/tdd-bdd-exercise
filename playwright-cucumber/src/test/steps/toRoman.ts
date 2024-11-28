import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

let inputNumber: string;
let result: string;

Given('the user enters the number', { timeout: 10000 }, async function () {
    console.log("Launching browser...");
    browser = await chromium.launch({
      headless: true,  // Run in non-headless mode to see what's happening
      timeout: 30000
    });
    console.log("browser launched...");
  
    console.log("Opening new page...");
    page = await browser.newPage();
    await page.goto('http://localhost:4200/romans');
    console.log(" new loaded...");
    console.log("Filling input...");
});

When('the user submits the form the value {string}', async function (numero: string) {
    inputNumber=numero;
    console.log("Hacer clicked...", numero);
    console.log("Filling input...");
    await page.fill('#arabicNumber', numero);
    console.log("Clicking submit button...");
    await page.click('#btnConvert');
});

Then('the system should display {string}', async function (expectedResult: string) {
    console.log("El resultado que espero es: "+inputNumber, expectedResult);
    const actualResult = await page.textContent('#result');
    expect(actualResult).toBe(`The result of converting ${inputNumber} to roman is ${expectedResult}.`);
    await browser.close();
});