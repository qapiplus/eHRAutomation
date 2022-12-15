export const userNameField = () => cy.get('#usernameOrEmailAddress');
export const userPasswordField = () => cy.get('#password');
export const loginButton = () =>  cy.get('#loginBtn');
export const chooseAgency = () => cy.get('select');
export const popupModal = () => cy.get('.swal-button-container');
export const headerUserName = () => cy.get('#headerUserName');
export const alertPopupText = () => cy.get('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-text')

