/// <reference types="Cypress" />

describe('The Home Page', () => {
  it('sucessfully loads', () => {
    cy.visit('/') // åpner nettsiden
    cy.wait(2000) // venter på at dataen skal laste inn
  })

  // it('Has the right navbar', () => {
  //   cy.get('[data-cy=navbar]').should('be.visible') // sjekker at navbaren er synlig
  // });
  

  // it('Moviecards should exist', () => { 
  //   cy.get('.movieCard').should('exist') // sjekker at movie card finnes
  // });
  
  // it('List of movieCard should exist', () => {
  //   cy.get('.list').should('exist') // sjekker at movie card list finnes
  // });

  // it('sucessfully scrolls', () => {
  //   cy.scrollTo('bottom', { duration: 2000 })
  // })

 

});
