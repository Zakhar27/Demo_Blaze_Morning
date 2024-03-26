export class SignUpPage {
   get loginField() {
       return cy.get('#sign-username');
   }
   get password() {
       return cy.get('#sign-password');
   }
   get signUpButton() {
       return cy.get('[onclick="register()"]');
   }

   reigsterUer(user) {
    this.loginField.type(user.name);
    this.password.type(user.password);
    this.signUpButton.click();
   }
   accertRegistration() {
      cy.on('window:alert', (alert) => {
        expect(alert).to.include('Sign up successful.');
     });
   }
}
