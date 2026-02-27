import '@shelex/cypress-allure-plugin';

// you can add global before/after hooks or custom commands here
Cypress.on('test:after:run', (test, runnable) => {
  // optional: add more metadata or attachments
});