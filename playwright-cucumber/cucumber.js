module.exports = {
    default: {
      require: ['src/test/steps/**/*.ts'], // Path to step definitions
      format: ['progress', 'json:results.json'], // Output formats
      parallel: 2, // Number of parallel scenarios to run
      requireModule: ['ts-node/register'], // Register ts-node for TypeScript
      paths: ['src/test/features/**/*.feature'], // Path to feature files
      defaultTimeout: 20000, // Set global timeout to 20 seconds
    },
  };
  