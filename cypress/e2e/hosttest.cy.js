describe('AirBTent Host Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should login as host, approve booking for maya, and logout', () => {
    // Step 1: Click on Host button
    cy.get('button').contains('Host').click()

    // Step 2: Enter username
    cy.get('input[type="text"], input[placeholder*="email"]').first().type('user2@gmail.com')

    // Step 3: Enter password
    cy.get('input[type="password"]').type('demo123')

    // Step 4: Click Log in
    cy.get('button').contains('Log in').click()

    // Wait for page to settle
    cy.wait(4000)

    // Step 5: Click on Host Booking (singular)
    cy.get('button').filter(':contains("Host Booking")').first().click({ force: true })

    // Wait for table to load - longer wait
    cy.wait(5000)

    // Step 6: Find row with "maya" (either name or email) and click Approve
    // Try finding any row containing "maya" (case insensitive)
    cy.get('table tbody tr').each(($row) => {
      if ($row.text().toLowerCase().includes('maya')) {
        cy.wrap($row).find('button').contains('Approve').click({ force: true })
        return false // break the loop
      }
    })

    // Wait for any action
    cy.wait(2000)

    // Step 7: Find and click Log out
    cy.get('*').filter(':contains("Log out")').first().click({ force: true })
  })
})
