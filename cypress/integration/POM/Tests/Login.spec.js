import { LoginPage, loginPage } from "../Pages/LoginPage";

describe('Check login page functionality',() =>{

    beforeEach(() => {
        loginPage.navigateToTab('Account/Login')
    });

    it('is possible to login to HR successfully with correct credentials', () =>{
        loginPage.inputCorrectEmail();
        loginPage.inputCorrectPassword();
        loginPage.clickLoginButton();
        loginPage.checkPageHeader("Welcome, Louisa")
    })

    it('is no possible to login to HR successfully with correct credentials', () =>{
        loginPage.inputIncorrectEmail();
        loginPage.inputIncorrectPassword();
        loginPage.clickLoginButton();
        loginPage.clickAlertPopupContinueButton();
    })
    it('is possible to login to HR successfully as admin', () =>{
        loginPage.inputAdminUsername();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        loginPage.checkpageHeaderp3('Welcome admin!')
        loginPage.clickLoginButton();
    })

    it('is possible to login to HR successfully as admin by choosing agency', () =>{
        loginPage.inputAdminUsername();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        loginPage.checkpageHeaderp3('Welcome admin!');
        loginPage.chooseAgency();
        loginPage.clickLoginButton();
        loginPage.checkPageHeader('Welcome, Alta Hospice Care');
    })


    it('is not possible to login HR successfully with empty username field', () =>{
        loginPage.inputCorrectPassword();
        loginPage.clickLoginButton();
    })

    it('is not possible to login HR successfully with empty password field', () =>{
        loginPage.inputCorrectEmail();
        loginPage.clickLoginButton(); 


    })
})