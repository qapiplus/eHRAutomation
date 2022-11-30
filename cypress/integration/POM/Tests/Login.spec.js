import { LoginPage, loginPage } from "../Pages/LoginPage";
import * as constants from '../../../fixtures/Constants.json'


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
        loginPage.checkAlertPopupErrorMessage(constants.wrong_email_alert_popup_text);
        loginPage.clickConfirmationButton();
        
    })
    it('is possible to login to HR successfully as admin', () =>{
        loginPage.inputAdminUsername();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        loginPage.pageHeaderh3()
        loginPage.clickLoginButton();
        loginPage.checkheaderUsername();
})

    it('is possible to login to HR successfully as admin by choosing agency', () =>{
        loginPage.inputAdminUsername();
        loginPage.inputAdminPassword();
        loginPage.clickLoginButton();
        loginPage.pageHeaderh3();
        loginPage.chooseAgency();
        loginPage.clickLoginButton();
        loginPage.checkPageHeader('Welcome, Louisa Agency');
    })

    // it('is possible to login to HR successfully by choosing agency', () =>{
    //     loginPage.inputCorrectEmailByChoosingAgency();
    //     loginPage.inputCorrectPassword();
    //     loginPage.clickLoginButton();
    //     loginPage.pageHeaderh3();
    //     loginPage.chooseAgency();
    //     loginPage.clickLoginButton();
    //     loginPage.checkPageHeader('')
    // })

})