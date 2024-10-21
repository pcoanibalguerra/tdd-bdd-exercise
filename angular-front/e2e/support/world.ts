import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

class CustomWorld extends World {
  browser: Browser | null = null;
  page: Page | null = null;

  async openBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
export { CustomWorld };
