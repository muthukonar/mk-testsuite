// GIVEN I am taking a tech quiz
// WHEN I click the start button
// THEN the quiz starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN all questions are answered
// THEN the quiz is over
// WHEN the quiz is over
// THEN I can view my score
// WHEN the quiz is over
// THEN I can start a new quiz

describe('Tech Quiz Flow - End to End', () => {
  it('should render the start button', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and show the first question when the start button is clicked', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
  });

  it('should show the next question after selecting an answer', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('.card').should('be.visible');
      cy.get('button').first().click();
      cy.get('.card').should('not.have.text', '');
    }
  });

  it('should show the score when all questions are answered', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('.card').should('be.visible');
      cy.get('button').first().click();
      cy.get('.card').should('not.have.text', '');
    }
    cy.get('.alert').should('be.visible');
  });

  it('should allow restarting the quiz when the "Take New Quiz" button is clicked', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('.card').should('be.visible');
      cy.get('button').first().click();
      cy.get('.card').should('not.have.text', '');
    }
    cy.get('.alert').should('be.visible');
    cy.get('button').contains('Take New Quiz').should('be.visible').click();
    cy.get('.card').should('be.visible');
  });

});
