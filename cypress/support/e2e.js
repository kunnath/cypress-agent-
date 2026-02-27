import '@shelex/cypress-allure-plugin';
import 'cypress-xpath';

// enable the recorder
import '@deploysentinel/cypress-recorder';

// custom commands (e.g. cy.login)
import './commands';

// you can add global before/after hooks or custom commands here
Cypress.on('test:after:run', (test, runnable) => {
  // optional: add more metadata or attachments
});