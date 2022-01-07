describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
    cy.window().should('have.property', '$nuxt')
  })

  it('login fields empty', () => {
    cy.get('input[name="username"]').type('1710274882')
    cy.get('form').submit()
    cy.get('button[type="submit"]').should('be.disabled')
    cy.window().then((window) => {
      cy.wrap(window).its('$nuxt.$auth.loggedIn').should('eq', false)
    })
  })
  it('login faild', () => {
    cy.intercept({
      method: 'POST',
      url: '**/auth/login/'
    }).as('login')
    cy.get('input[name="username"]').type('1710274882')
    cy.get('input[name="password"]').type('Aa123456')
    cy.get('button[type="submit"]').should('not.be.disabled')

    cy.get('form').submit()
    cy.wait('@login').its('response.statusCode').should('eq', 401)
    cy.window().then((window) => {
      cy.wrap(window).its('$nuxt.$auth.loggedIn').should('eq', false)
    })
  })

  it('login success', () => {
    cy.intercept({
      method: 'POST',
      url: '**/auth/login/'
    }).as('login')
    cy.get('input[name="username"]').type('1710274883')
    cy.get('input[name="password"]').type('Aa123456')
    cy.get('form').submit()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.wait('@login').its('response.statusCode').should('eq', 200)
    cy.window().then((window) => {
      cy.wrap(window).its('$nuxt.$auth.loggedIn').should('eq', true)
    })
  })
})
