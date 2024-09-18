import { generate, Options } from 'cucumber-html-reporter';

const options: Options = {
  theme: 'bootstrap',                  // Correct type for theme
  jsonFile: 'results.json',             // Path to the generated JSON file
  output: 'cucumber_report.html',       // Path where the HTML report will be saved
  reportSuiteAsScenarios: true,
  launchReport: true,                   // Automatically open the report after generation
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium 113",
    "Platform": "MacOS",
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
};

generate(options);
