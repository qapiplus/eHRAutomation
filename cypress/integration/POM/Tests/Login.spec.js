import { loginPage } from "../Pages/LoginPage";

describe('Check login page functionality',() =>{

    beforeEach(() => {
        loginPage.navigateToTab('Account/Login')
    });

    it('is possible to login to HR successfully with correct credentials', () =>{
        loginPage.inputCorrectEmail();
        loginPage.inputCorrectPassword();
        loginPage.clickLoginButton()
    })
    it('is not possible to login to HR successfully with incorrect credentials', () =>{
        loginPage.inputIncorrectEmail();
        loginPage.inputIncorrectPassword();
        loginPage.clickLoginButton()
    })
    it('is possible to login to HR successfully with admin credentials', () =>{
        loginPage.inputAdminEmail();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        cy.wait(1000);
        loginPage.clickLoginButton();
    })
})