import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('the user is on the  homepage', async () => {
  console.log("Launching browser...");
  browser = await chromium.launch({
    headless: true,  // Run in non-headless mode to see what's happening
    timeout: 30000
  });
  console.log("browser launched...");

  console.log("Opening new page...");
  page = await browser.newPage();
  await page.goto('http://localhost:4200/');
  console.log(" new loaded...");
});


Then('page title must be {string}', async (title: string) => {
  const content = await page.textContent('title');
  expect(content).toContain(title);
  await browser.close();
});
