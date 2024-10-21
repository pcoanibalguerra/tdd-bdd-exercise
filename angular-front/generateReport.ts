import { generate } from 'multiple-cucumber-html-reporter';

generate({
  jsonDir: 'results',
  reportPath: './reports/cucumber-html-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Local Test Machine',
    platform: {
      name: 'macOS',
      version: '12.0',
    },
  },
});
