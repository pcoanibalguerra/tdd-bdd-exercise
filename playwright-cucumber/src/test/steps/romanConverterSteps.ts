import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';
import { test } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('the user is on the roman converter', async () => {
    browser = await chromium.launch({
        headless: false,  // Run in non-headless mode to see what's happening
        timeout: 30000
      });
      page = await browser.newPage();
      await page.goto('http://localhost:4200/');
      
  })



Then('Roman converter page title must be {string}', async (title: string) => {
    const content = await page.textContent('title');
    expect(content).toContain(title);
    
})

Then('Header title must be {string}', async (headerTitle: string) => {
    const titleElement = page.locator('#headerTitle');
    const titleText = await titleElement.textContent();
    expect(titleText).toBe(headerTitle);
})

Then('the foother must have copyright {string}', async (copyRight: string) => {
    const titleElement = page.locator('#copyRight');
    const titleText = await titleElement.textContent();
    expect(titleText).toBe(copyRight);
})

When('the user input {string}', async (intNumber: string) => {
    await page.fill('input[name="intNumber"]', intNumber);
    await page.click('input[name="btnConvert"]');
  })

Then('the result should be {string}', async (result: string) => {
    const titleElement = page.locator('#result');
    await expect(titleElement).toHaveText(result);
})







