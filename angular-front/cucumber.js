module.exports = {
    default: {
      requireModule: ['ts-node/register'],
      require: [
        'e2e/support/world.ts',
        'e2e/steps/**/*.ts'  // Path to your step definitions
      ],
      format: ['json:results/results.json', 'progress'],
      publishQuiet: true,
      paths: ['e2e/features/**/*.feature'],
      requireModule: ['ts-node/register'],  // For TypeScript support
      worldParameters: {
        playwrightConfig: 'playwright.config.ts' // Specify Playwright config
      }
    }
  };
  