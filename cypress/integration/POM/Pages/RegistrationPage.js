import BasePage from './BasePage';
import * as selectors from "./RegistrationPageSelectors";

import * as constants from "../../../fixtures/Constants.json";

export class RegistrationPage extends BasePage{

    inputname() {
        selectors.name().type(constants.name);
    }

    inputSurname(){
        selectors.surname().type(constants.surname);
    }

    inputEmailAddress(){
        selectors.EmailAddress().type(constants.EmailAddress);
    }

    inputPhoneNumber(){
        selectors.PhoneNumber().type(constants.PhoneNumber);
    }
    
    inputExistingEmailAddress(){
        selectors.EmailAddress().type(constants.ExistingEmailAddress);
    }

    inputValidPassword(){
        selectors.password().type(constants.ValidPassword);
    }
}

export const registrationPage = new RegistrationPage();