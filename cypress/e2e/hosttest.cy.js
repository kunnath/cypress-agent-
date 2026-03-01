describe('AirBTent Host Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should login as host, approve first pending booking, and logout', () => {
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

    // Step 5: Click on Host Booking
    cy.get('button').filter(':contains("Host Booking")').first().click({ force: true })

    // Wait for table to load
    cy.wait(5000)

    // Step 6: Find any row with Pending status and click Approve
    cy.get('table tbody tr').each(($row) => {
      const rowText = $row.text()
      if (rowText.includes('Pending') && rowText.includes('Approve')) {
        cy.wrap($row).find('button').contains('Approve').click({ force: true })
        return false
      }
    })

    // Wait for success message
    cy.wait(3000)

    // Step 7: Click Dashboard to go back to main view
    cy.get('button').contains('Dashboard').click({ force: true })
    cy.wait(2000)

    // Step 8: Click the user button in top right (the one with avatar/user icon)
    // Try clicking on any button in the header area
    cy.get('header, nav').find('button').last().click({ force: true })
    cy.wait(1000)

    // Step 9: Look for logout in the dropdown/menu that appears
    cy.get('body').then(($body) => {
      // Check if there's a menu with logout
      if ($body.text().includes('Logout')) {
        cy.contains('Logout').click({ force: true })
      } else {
        // Try clicking the last button again or find any logout link
        cy.get('button, a').filter(':contains("Logout")').first().click({ force: true })
      }
    })
  })
})
