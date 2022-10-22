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

    it('is no possible to login to HR successfully with incorrect credentials', () =>{
        loginPage.inputIncorrectEmail();
        loginPage.inputIncorrectPassword();
        loginPage.clickLoginButton();
        loginPage.clickAlertPopupContinueButton();
        loginPage.popupModal();
    })
    it('is possible to login to HR successfully as admin', () =>{
        loginPage.inputAdminUsername();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        loginPage.pageHeaderh3('Welcome eHR!')
        loginPage.clickLoginButton();
        loginPage.checkheaderUsername('Ehr Automation');
        })

    it.only('is possible to login to HR successfully as admin by choosing agency', () =>{
        // loginPage.inputAdminUsername();
        // loginPage.inputAdminPassword();
        // loginPage.clickLoginButton();
        // loginPage.chooseAgency();
        // loginPage.clickLoginButton();
        // loginPage.checkPageHeader('Welcome, Louisa Agency');


        loginPage.inputAdminUsername();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        loginPage.pageHeaderh3('Welcome admin!');
        loginPage.chooseAgency();
        loginPage.clickLoginButton();
        loginPage.checkPageHeader('Welcome, Louisa Agency');
    })

})