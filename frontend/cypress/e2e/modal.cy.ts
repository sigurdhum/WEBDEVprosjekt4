/// <reference types="Cypress" />

describe('Testing modal', () => {
  beforeEach('setUp', () => {
    cy.visit('/') //opens our website
    cy.wait(2000) // wait so data loads inn
  })

  it('check right movie is shown when clicking on moviecard', () => {
    // klikker på første film
    cy.get('.movieCard').eq(0).click({force: true}).wait(500) 
    // sjekker at tittelen stemmer med første moviecard 
    cy.get('[data-cy=movie-modal-title]').scrollIntoView().should('be.visible').should('contain', 'Look Both Ways') 
  });

  it('add review to movie', () => { 
    // klikker på første film
    cy.get('.movieCard').eq(0).click({force: true})
    cy.wait(100) 
    // skriver inn en review
    cy.get('[data-cy=review-textarea]').eq(0).click({force: true}).wait(100).type('SuperGod test',{force: true}) 
    // trykker på submit
    cy.get('[data-cy=review-submit]').click({force: true}) 
    cy.wait(1000)
    // sjekker at textarea er tom
    cy.get('[data-cy=review-textarea]').should('be.empty') 
    // sjekker at reviewen er lagt til
    cy.get('[data-cy=movie-modal-reviews]').should('contain', 'SuperGod test') 
  });

});