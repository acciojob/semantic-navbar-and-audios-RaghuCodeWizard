cy.visit('your-page-url');
cy.wait(2000); // Wait for 2 seconds
cy.get('audio').should('be.visible');
cy.get('audio').should('be.visible').should('have.length', 3).retry(3);
