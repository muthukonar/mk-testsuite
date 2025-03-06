describe('Tech Quiz End-to-End Test', () => {
    it('should allow a user to complete a quiz and view their score', () => {
      cy.visit('/');
      
      cy.contains('Start Quiz').click();
      
      cy.get('.answer-option').each((option) => {
        cy.wrap(option).click();
      });
  
      cy.contains('Your Score').should('be.visible');
      
      cy.get('.score').should('contain', '10'); // Assuming the user answers all questions correctly
      
      cy.contains('Start New Quiz').click();
      cy.get('.question').should('be.visible');
    });
  });