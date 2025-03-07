describe('Tech Quiz End-to-End Test', () => {
  it('should allow a user to complete a quiz and view their score', () => {
    
    cy.visit('/');
    cy.wait(200000);
    cy.contains('Start Quiz').should('be.visible').click();
    
    cy.get('.answer-option', { timeout: 10000 }).should('be.visible').each((option) => {
      cy.wrap(option).click();
    });

    cy.contains('Your Score').should('be.visible');
    cy.get('.score').should('contain', '10'); // Make sure the score is 10

    cy.contains('Start New Quiz').should('be.visible').click();
    
    cy.get('.question').should('be.visible');
  });
});

