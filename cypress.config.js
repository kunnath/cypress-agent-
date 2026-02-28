const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  projectId: "dkncjn",
  env: {
    // enable allure plugin by default for both open and run
    allure: true,
    // direct results into cypress/results so `npm run allure:generate` works
    allureResultsPath: 'cypress/results'
  },

  reporterOptions: {
    // only spec and junit reporters – the allure results are handled by the
    // lightweight writer loaded in setupNodeEvents (adding the plugin reporter
    // here causes a `Cypress is not defined` crash when using multi-reporters).
    reporterEnabled: "spec, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/junit/results-[hash].xml",
    },
    // optional: can configure allure output directory via environment
    // but writer (setupNodeEvents) handles default location
  },

  e2e: {
    setupNodeEvents(on, config) {
      // use the lightweight writer in Node context rather than loading the
      // entire reporter (which assumes a browser `Cypress` global).
      const allureWriter = require("@shelex/cypress-allure-plugin/writer");
      allureWriter(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000",
    // baseUrl: 'https://www.airbtent.com',
    // note: use `e2e` folder/spec pattern below instead of legacy `integration` path
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    supportFile: 'cypress/support/e2e.js',
    // additional node event listeners can be implemented here
    // (existing writer setup above handles allure events)
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
