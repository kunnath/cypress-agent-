// smoke test for airbtent.com
// located under cypress/e2e

describe('Airbtent smoke suite', () => {
  const baseUrl = 'https://www.airbtent.com';

  beforeEach(() => {
    // ensure Cypress baseUrl is not used so full URL provided
  });

  it('should load the homepage', () => {
    cy.visit(baseUrl);
    cy.title().should('include', 'Airbtent');
    cy.get('header').should('be.visible');
    cy.allure().step('Home page loaded and header visible');
  });

  it('should open the navigation menu', () => {
    cy.visit(baseUrl);
    cy.get('button[aria-label="Toggle navigation"]').click({force:true});
    cy.get('nav').should('be.visible');
    cy.allure().step('Navigation menu opened');
  });
});

// existing example spec preserved for reference

describe('Example spec', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.allure().step('Checked url contains commands/actions');
  });
});