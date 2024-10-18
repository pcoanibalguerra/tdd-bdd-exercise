import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';
import { test } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('the user is on the home page', async () => {
    browser = await chromium.launch({
        headless: false,  // Run in non-headless mode to see what's happening
        timeout: 30000
      });
      page = await browser.newPage();
      await page.goto('http://localhost:4200/');
});

Then('the user should see {string}', async (message: string) => {
  const welcomeText = await page.textContent('h1');
  expect(welcomeText).toBe(message);
});

When('the user enters {string} in the name input', async (name: string) => {
  await page.waitForSelector('input[name="userName"]', { state: 'visible' });
  await page.fill('input[name="userName"]', name);
});

When('clicks the submit button', async () => {
  await page.click('button[name="submitButon"]');
});

Then('the user should be on the Todo app page', async () => {
  expect(page.url()).toContain('/todo-app');
});

Then('the title should be {string}', async (title: string) => {
  const titleText = await page.textContent('h1');
  expect(titleText).toBe(title);
});
