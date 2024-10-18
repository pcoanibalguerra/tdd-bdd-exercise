import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';
import { test } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('el usuario está en la página de inicio', async () => {
    browser = await chromium.launch({
        headless: false,  // Run in non-headless mode to see what's happening
        timeout: 30000
      });
      page = await browser.newPage();
      await page.goto('http://localhost:4200/');
});

Then('El usuario debe ver {string}', async (message: string) => {
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

Given('the user is on the Todo app page', async () => {
  browser = await chromium.launch({
    headless: false,  // Run in non-headless mode to see what's happening
    timeout: 30000
  });
  page = await browser.newPage();
  await page.goto('http://localhost:4200/todo-app');
});

When('the user enters {string} as the task title', async (taskTitle: string) => {
  await page.fill('input[placeholder="Task Title (required)"]', taskTitle);
});

When('clicks the add task button', async () => {
  await page.click('button:has-text("Add Task")');
});

Then('the task should appear in the task list', async () => {
  const taskText = await page.textContent('.task-list li strong');
  expect(taskText).toBe('Buy groceries');
});


Given('a task {string} is in the task list', async (taskTitle: string) => {
  await page.fill('input[placeholder="Task Title (required)"]', taskTitle);
  await page.click('button:has-text("Add Task")');
});

When('the user marks the task as completed', async () => {
  await page.click('.task-list li input[type="checkbox"]');
});

Then('the task state should be {string}', async (state: string) => {
  const stateText = await page.textContent('.task-list li .task-state');
  expect(stateText).toBe(state);
});




