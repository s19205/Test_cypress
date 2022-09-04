describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("https://www.timoni.io/")
  })
  it("Contact us", () => {
    cy.get('input[id="cemail"]').type('email1234@mail.com')
    cy.get('#send-email').click()
    cy.get('.email-send-modal.open')
    cy.get('.exit').click()
    cy.get('.email-send-modal.open').should('not.exist')
  })

  it("Features list", () => {
    cy.get('a[href="#learnmore"]').click()
    cy.url().should('include', '#learnmore') 
    cy.get('#ec__target__1').should('have.class', '-is-active')
    cy.get('li[data-target="ec__target__2"]').click()
    cy.get('#ec__target__2').should('have.class', '-is-active')
    cy.get('li[data-target="ec__target__3"]').click()
    cy.get('#ec__target__3').should('have.class', '-is-active')
    cy.get('li[data-target="ec__target__4"]').click()
    cy.get('#ec__target__4').should('have.class', '-is-active')
    cy.get('li[data-target="ec__target__5"]').click()
    cy.get('#ec__target__5').should('have.class', '-is-active')
    cy.get('li[data-target="ec__target__6"]').click()
    cy.get('#ec__target__6').should('have.class', '-is-active')
    cy.get('li[data-target="ec__target__7"]').click()
    cy.get('#ec__target__7').should('have.class', '-is-active')

    cy.get('.ec-tabs-2__download a').should('have.attr','href','/pdf/Timoni_features_EN.pdf')
  })

  it("Expand development steps", () => {
    cy.get('#ec__tab__1').find('.ec-toggler').should('have.length', 4)
    cy.get('.ec-toggler').should('have.class', '-is-active').eq(0)
    cy.get('#ec__tab__1').find('.ec-toggler__button').eq(0).click()
    cy.get('.ec-toggler').should('not.have.class', '-is-active').eq(0)
    cy.get('.ec-toggler').should('not.have.class', '-is-active').eq(1)
    cy.get('#ec__tab__1').find('.ec-toggler__button').eq(1).click()
    cy.get('.ec-toggler').should('have.class', '-is-active').eq(1)
  })

  it("External links", () => {
    cy.get('.fab').should('have.length', 2)
    cy.get('.fa-linkedin-in').should('have.attr', 'href', 'https://www.linkedin.com/company/timoni-io/')
    cy.get('.fa-facebook-f').should('have.attr', 'href', 'https://www.facebook.com/timoni.io/')
  })

})