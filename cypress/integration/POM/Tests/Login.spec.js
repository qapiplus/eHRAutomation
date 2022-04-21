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

})