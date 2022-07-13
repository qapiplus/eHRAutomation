import BasePage from './BasePage';
import * as selectors from "./RegistrationPageSelectors";
import * as constants from "../../../fixtures/Constants.json";

export class RegistrationPage extends BasePage{

    inputValidName(){
        selectors.FirstNameField().type(constants.ValidName);
    }

    inputValidSurname(){
        selectors.LastNameField().type(constants.ValidSurname);
    }

    inputValidEmail(){
        selectors.EmailAddressField().type(constants.ExistingEmail);
    }
    
    inputExistingEmail(){
        selectors.EmailAddressField().type(constants.ExistingEmail);
    }
    inputValidPhoneNumber(){
        selectors.PhoneNumberField().type(constants.ValidPhoneNumber);
    }
    inputValidPassword(){
        selectors.PasswordField().type(constants.ValidPassword);
    }
    checkPolicyAgreement(){
        selectors.PolicyAgreementCheck().click();
    }
    ClickRegisterButton(){
        selectors.RegisterButton().click();
    }
}

export const registrationPage = new RegistrationPage();