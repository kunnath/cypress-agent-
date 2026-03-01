const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  projectId: "dkncjn",
  env: {
    allure: true,
    allureResultsPath: 'cypress/results'
  },

  reporterOptions: {
    reporterEnabled: "spec, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/junit/results-[hash].xml",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      const allureWriter = require("@shelex/cypress-allure-plugin/writer");
      allureWriter(on, config);
      return config;
    },
    // Use environment variable or default
    baseUrl: process.env.CYPRESS_BASE_URL || process.env.CYPRESS_BASEURL || "http://localhost:3000",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    supportFile: 'cypress/support/e2e.js',
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  experimentalStudio: true,

  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
