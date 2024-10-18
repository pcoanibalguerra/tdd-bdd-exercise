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

When('El usuario ingresa {string} en el campo de nombre', async (name: string) => {
  await page.waitForSelector('input[name="userName"]', { state: 'visible' });
  await page.fill('input[name="userName"]', name);
});

When('presiona el botón enviar', async () => {
  await page.click('button[name="submitButon"]');
});

Then('el usuario debe estar en la página de To Do', async () => {
  expect(page.url()).toContain('/todo-app');
});

Then('El título debe ser  {string}', async (title: string) => {
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


Given('la tarea {string} está en la lista de pendientes', async (taskTitle: string) => {
  await page.fill('input[placeholder="Task Title (required)"]', taskTitle);
  await page.click('button:has-text("Add Task")');
});

When('el usuario la marca como completada', async () => {
  await page.click('.task-list li input[type="checkbox"]');
});

Then('la tarea debe estar {string}', async (state: string) => {
  const stateText = await page.textContent('.task-list li .task-state');
  expect(stateText).toBe(state);
});



