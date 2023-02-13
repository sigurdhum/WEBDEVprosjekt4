/// <reference types="Cypress" />


describe('Check filterfunctions', () => {
  beforeEach('setUp', () => {
     //opens our website
    cy.visit('/')
    cy.wait(2000)
  })

  it('Filter by genre', () => {
    cy.scrollTo(0,0).wait(100)
    cy.get('.filterButton').eq(1).click({force:true}) // klikker på Action
    cy.wait(2000)
    cy.get('.movieCard').eq(0).should('contain', 'Action') //sjekker at første film er action
    cy.scrollTo(1000,1000) //scroll ned
    cy.get('.movieCard').eq(5).should('contain', 'Action') // sjekkker at 6 film er action
    cy.get('.filterButton').eq(5).click({force:true}) // klikker på Romantikk
    cy.wait(2000)
    cy.get('.movieCard').eq(0).should('contain', 'Romantikk') //sjekker at første film er Romantikk
    cy.get('.list').should('contain', 'Adrift') // sjekker at Adrift ligger i Romantikk
  });


  it('Check if serarchBar filters', () => {
    cy.get('[data-cy=search-bar]').type('Moonfall') // søker opp  Moonfall
    cy.wait(3000)
    cy.get('.list').eq(0).should('contain', 'Moonfall') // sjekker at det bare er en film som kommer opp
    cy.get('[data-cy=search-bar]').clear().wait(4000) // tømmer søkefeltet
    cy.get('[data-cy=search-bar]').type('Adr')// skriver ufulstendig søk
    cy.wait(4000)
    //sjekker at det kjem fleire forslag
    cy.get('.movieCard').eq(0).should('contain', 'Adrift') 
   
  });

  // sjekker at dsort knappen funker from nyest og eldst
  it('Check if sorting works', () => {
    //må endres
    cy.get('.movieCard').eq(0).should('contain', 2022) 
    cy.get('#sortbtn').click({force: true})
    cy.wait(2000)
    cy.get('.movieCard').eq(0).should('contain', 1980) 
    cy.get('#sortbtn').click({force: true})
    cy.wait(2000)
    cy.get('.movieCard').eq(0).should('contain', 2022) 
  });

})