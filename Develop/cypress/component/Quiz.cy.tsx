import React from 'react';
import Quiz from '../../client/src/components/Quiz';  
import { mount } from '@cypress/react';

describe('Quiz Component', () => {
    it('should start the quiz when the start button is clicked', () => {
      mount(<Quiz />);
  
      cy.contains('Start Quiz').should('be.visible');
      
      cy.contains('Start Quiz').click();
      
      cy.get('.question').should('be.visible');
    });
  
    it('should go to the next question after answering', () => {
      mount(<Quiz />);
      
      cy.contains('Start Quiz').click();
      
      cy.get('.answer-option').first().click();
      
      cy.get('.question').should('not.contain', 'Question 1').should('contain', 'Question 2');
    });
  
    it('should show the final score when the quiz ends', () => {
      mount(<Quiz />);
      
      cy.contains('Start Quiz').click();
      cy.get('.answer-option').each((option) => {
        cy.wrap(option).click();
      });
  
      cy.contains('Your Score').should('be.visible');
    });
  
    it('should be able to start a new quiz after finishing', () => {
      mount(<Quiz />);
      
      cy.contains('Start Quiz').click();
      cy.get('.answer-option').each((option) => {
        cy.wrap(option).click();
      });
  
      cy.contains('Start New Quiz').click();
      
      cy.get('.question').should('be.visible');
    });
  });