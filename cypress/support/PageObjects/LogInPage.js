export class LogInPage {
    get loginField() {
        return cy.get('#loginusername');
    }

    get passwordField() {
        return cy.get('#loginpassword');
    }

    get logInButton() {
        return cy.get('[onclick="logIn()"]')
    }

    logInExistingUser() {
        this.loginField.type('Yessenia4');
        this.passwordField.type('Pa$$word123!');
        this.logInButton.click();
    }

    accertLogIn() {
        cy.get('#nameofuser')
          .should('contain', 'Welcome Yessenia4');
    }
}
