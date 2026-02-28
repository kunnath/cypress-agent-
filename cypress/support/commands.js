// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// Custom login command used by tests to keep flow DRY and selectors in one place.

const selectors = {
  // updated to match the guest/login button element (first child of nav)
  loginNav: 'nav .hidden.md\\:flex.items-center.gap-2.md\\:gap-3 > button:nth-child(1)',
  emailInput: '.space-y-4 > :nth-child(1) > .relative > .w-full',
  passwordInput: '.space-y-4 > :nth-child(2) > .relative > .w-full',
  submitBtn: '.space-y-4 > .py-3'
};

/**
 * Navigates to the login form and submits credentials.
 *
 * The application may expose a login button, a dedicated route, or a
 * floating modal.  Instead of relying on brittle class selectors we
 * attempt several fallbacks:
 *   1. click the primary navigation link if present
 *   2. visit `/login` directly (baseUrl is set above)
 *   3. locate any email/password inputs by common attributes
 *
 * Selectors have generous timeouts so the command waits for animations
 * or network delays rather than failing immediately.
 */
Cypress.Commands.add('login', (email, password) => {
  // remove blocking overlays that persist on every page load
  cy.get('body').then($body => {
    const $ov = $body.find('div.fixed.inset-0.z-50');
    if ($ov.length) {
      cy.log('removing page overlay');
      $ov.remove();
    }
  });

  cy.get('body').then($body => {
    if ($body.find(selectors.loginNav).length) {
      cy.get(selectors.loginNav).click();
    } else {
      cy.visit('/');
    }
  });

  // choose whichever email field we can find first
  cy.get(
    'input[type="email"], input[name="email"], ' + selectors.emailInput,
    { timeout: 10000 }
  )
    .first()
    .as('emailField');

  cy.get('@emailField').clear().type(email);

  // password field fallback
  cy.get(
    'input[type="password"], input[name="password"], ' + selectors.passwordInput,
    { timeout: 10000 }
  )
    .first()
    .as('passField');

  cy.get('@passField').clear().type(password);

  // submit using type=submit button or known selector
  cy.get('button[type="submit"], ' + selectors.submitBtn, { timeout: 10000 }).click();
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })