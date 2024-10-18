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

      await page.goto('http://localhost:4200/');
});

Then('the user should see {string}', async (message: string) => {
  const welcomeText = await page.textContent('h1');
  expect(welcomeText).toBe(message);
});
