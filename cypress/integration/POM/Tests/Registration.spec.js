import { registrationPage } from "../Pages/RegistrationPage";

describe('Check Registration functionality',() =>{

    beforeEach(() => {
        registrationPage.navigateToTab('Account/Register')
    });

    it('is possible to register account with valid credentials', () =>{
        registrationPage.inputValidName();
        registrationPage.inputValidSurname();
        registrationPage.inputValidEmail();
        registrationPage.inputValidPhoneNumber();
        registrationPage.inputValidPassword();
        registrationPage.checkPolicyAgreement();
        registrationPage.ClickRegisterButton();
    })

    it('is not possible to register account without checking the Policy Agreement', () =>{
        registrationPage.inputValidName();
        registrationPage.inputValidSurname();
        registrationPage.inputValidEmail();
        registrationPage.inputValidPhoneNumber();
        registrationPage.inputValidPassword();
        registrationPage.ClickRegisterButton();
    })

    it('is not possible to register account with existing email', () =>{
        registrationPage.inputValidName();
        registrationPage.inputValidSurname();
        registrationPage.inputExistingEmail();
        registrationPage.inputValidPhoneNumber();
        registrationPage.inputValidPassword();
        registrationPage.checkPolicyAgreement();
        registrationPage.ClickRegisterButton();
    })
    it('is not possible to register account leaving required field empty', () =>{
        registrationPage.inputValidName();
        registrationPage.inputValidSurname();
        registrationPage.inputValidPhoneNumber();
        registrationPage.inputValidPassword();
        registrationPage.checkPolicyAgreement();
        registrationPage.ClickRegisterButton();
    })
})