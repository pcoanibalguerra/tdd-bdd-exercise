import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('the user is on the search engine homepage', async () => {
  browser = await chromium.launch({
    headless: true,  // Run in non-headless mode to see what's happening
    timeout: 30000
  });
  console.log("Opening new page...");
  page = await browser.newPage();
  console.log("Going to google...");
  await page.goto('https://www.google.com', { timeout: 30000 });
});

When('the user searches for {string}', async (searchTerm: string) => {
  await page.fill('textarea[name="q"]', searchTerm);
  await page.click('input[name="btnK"]');
  await page.waitForTimeout(1000); // Waiting for results to load
});

Then('search results for {string} should be displayed', async (searchTerm: string) => {
  const content = await page.textContent('body');
  expect(content).toContain(searchTerm);
  await browser.close();
});
