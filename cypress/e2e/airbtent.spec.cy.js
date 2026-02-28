

describe('AirBTent Guest Login Flow', () => {
  beforeEach(() => {
    // Visit the AirBTent website
    cy.visit('http://localhost:3000')
  })

  it('should login as a guest with valid credentials', () => {
    // Step 1: Click on Guest button in the top corner
    cy.get('button').contains('Guest').click()

    // Step 2: Enter email address
    cy.get('input[type="text"], input[placeholder*="email"]')
      .first()
      .type('maya@gmail.com')

    // Step 3: Enter password
    cy.get('input[type="password"]')
      .type('demo123')

    // Step 4: Click Log in button
    cy.get('button').contains('Log in').click()

    // Step 5: Verify successful login
    cy.url().should('include', 'localhost:3000')
    cy.contains('Welcome, maya!').should('be.visible')
    
    // Verify dashboard elements are visible
    cy.contains('Active Bookings').should('be.visible')
    cy.contains('Total Stays').should('be.visible')
    cy.contains('Browse Listings').should('be.visible')
    cy.contains('My Bookings').should('be.visible')
  })

  it('should show error with invalid credentials', () => {
    // Click on Guest button
    cy.get('button').contains('Guest').click()

    // Enter invalid credentials
    cy.get('input[type="text"], input[placeholder*="email"]')
      .first()
      .type('invalid@test.com')
    
    cy.get('input[type="password"]')
      .type('wrongpassword')

    // Click Log in
    cy.get('button').contains('Log in').click()

    // Verify error message or stay on login page
    cy.contains('Invalid').should('be.visible')
  })
})


