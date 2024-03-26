///  <reference types='cypress' />

const { SignUpPage } = require('../support/PageObjects/SignUpPage');
const { LogInPage } = require('../support/PageObjects/LogInPage');

const signUpPage = new SignUpPage();
const logInPage = new LogInPage();

let user = {};

beforeEach(() => {
  cy.visit('/');
  cy.task('generateUser').then((generateUser) => {
    user = generateUser;
  });
});

describe('template spec', () => {
  it('should Sign Up user', () => {
    cy.get('#signin2').click();
    signUpPage.reigsterUser(user);
    signUpPage.accertRegistration();
  });

  it('should Sign In user', () => {
    cy.get('#login2').click();
    logInPage.logInExistingUser();
    logInPage.accertLogIn();
  });

  it('should add Samsung Galaxy s6 to the cart', () => {
    cy.visit('/prod.html?idp_=1');
    cy.get('[onclick="addToCart(1)"]').click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.include('Product added');
    })
  });
});
