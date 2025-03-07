// import  Quiz  from '../../client/src/components/Quiz.js';  
// import { mount } from 'cypress/react18';
// import '@testing-library/cypress/add-commands';


// describe('Quiz Component', () => {
//     it('should start the quiz when the start button is clicked', () => {
//       mount(<Quiz />);
  
//       cy.contains('Start Quiz').should('be.visible');
    
      
//       cy.contains('Start Quiz').click();
     
//       cy.get('.card').should('be.visible');
//     });
  
//     it('should go to the next question after answering', () => {
//       mount(<Quiz />);
      
//       cy.contains('Start Quiz').click();
      
//       cy.get('.answer-option').first().click();
      
//       cy.get('.question').should('not.contain', 'Question 1').should('contain', 'Question 2');
//     });
  
//     it('should show the final score when the quiz ends', () => {
     
//       mount(<Quiz />);
 
//       cy.contains('Start Quiz').click();
      
//       cy.get('.answer-option').each((option) => {
//         cy.wrap(option).click();
//       });
  
//       cy.contains('Your Score').should('be.visible');
//     });
  
//     it('should be able to start a new quiz after finishing', () => {
//       mount(<Quiz />);
      
//       cy.contains('Start Quiz').click();
//       cy.get('.answer-option').each((option) => {
//         cy.wrap(option).click();
//       });
  
//       cy.contains('Start New Quiz').click();
      
//       cy.get('.question').should('be.visible');
//     });
//   });

import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz.js';
import '@testing-library/cypress/add-commands';

describe('Quiz Component', () => {
  it('should start the quiz when the start button is clicked', () => {
    mount(<Quiz />);

    // Check if the "Start Quiz" button is visible and click it
    cy.contains('Start Quiz').should('be.visible').click();

    // Wait for the quiz to load and check if the card is visible
    cy.get('.card', { timeout: 10000 }).should('be.visible');
  });

  it('should go to the next question after answering', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.contains('Start Quiz').click();

    // Wait for the question to appear (ensure the text is in the card)
    cy.get('.card', { timeout: 10000 }).should('assert', 'Question 1'); // Ensure the question is displayed

    // Click the first answer
    cy.get('.btn.btn-primary').first().click();

    // Wait for the next question to appear
    cy.get('.card.p-4', { timeout: 10000 })
      .should('not.contain', 'Question 1') // Ensure Question 1 is not present
      .and('assert', 'Question 2'); // Ensure Question 2 is now present
  });

  it('should show the final score when the quiz ends', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.contains('Start Quiz').click();

    // Click all answers for the questions
    cy.get('.btn.btn-primary').each((button) => {
      cy.wrap(button).click();
    });

    // Wait for the quiz to complete and verify the score message
    cy.get('.card.p-4', { timeout: 10000 }).should('assert', 'Quiz Completed');
    cy.get('.alert.alert-success').should('assert', 'Your score');
  });

  it('should be able to start a new quiz after finishing', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.contains('Start Quiz').click();
    
    // Click all answers for the questions
    cy.get('.btn.btn-primary').each((button) => {
      cy.wrap(button).click();
    });

    // Verify the "Take New Quiz" button is shown and click it
    cy.contains('Take New Quiz').click();
    


    // Verify the new quiz is starting
    cy.get('.card.p-4', { timeout: 10000 }).should('assert','be.visible');
  });

  it('should show a loading spinner when questions are being fetched', () => {
    mount(<Quiz />);

    // Start the quiz
    cy.contains('Start Quiz').click();

    // Wait for the questions to load, and verify that the loading spinner is visible
    cy.get('.d-flex.justify-content-center.align-items-center.vh-100', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('.spinner-border').should('exist'); // Ensure the spinner is visible
      });
  });
});
