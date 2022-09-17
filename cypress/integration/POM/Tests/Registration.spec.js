import { RegistrationPage, registrationPage } from "../Pages/RegistrationPage";

describe('Check login page functionality',() =>{

    beforeEach(() => {
        RegistrationPage.navigateToTab('Account/Register')
    });

    it('is possible to login with all credentials', () =>{
        registrationPage.inputname(),
        registrationPage.inputSurname(),
        registrationPage.inputEmailAddress(),
        registrationPage.inputPhoneNumber(),
        registrationPage.inputValidPassword(),
        
    })








})