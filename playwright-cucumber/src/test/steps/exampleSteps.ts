import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('the user is on the search engine homepage', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://www.google.com');
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
