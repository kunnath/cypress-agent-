const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  projectId: "dkncjn",

  reporterOptions: {
    reporterEnabled: "spec, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/junit/results-[hash].xml",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // use the lightweight writer in Node context rather than loading the
      // entire reporter (which assumes a browser `Cypress` global).
      const allureWriter = require("@shelex/cypress-allure-plugin/writer");
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://example.cypress.io",
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
