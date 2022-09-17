import BasePage from './BasePage';
import * as selectors from "./LoginPageSelectors";
import * as constants from "../../../fixtures/Constants.json";

export class LoginPage extends BasePage{

    inputCorrectEmail() {
        selectors.userNameField().type(constants.CorrectEmail);
    }

    inputCorrectPassword() {
        selectors.userPasswordField().type(constants.CorrectPassword);
    }

    clickLoginButton(){
        selectors.loginButton().click();
    }

    inputIncorrectEmail(){
        selectors.userNameField().type(constants.IncorrectEmail);
    }

    inputIncorrectPassword(){
        selectors.userPasswordField().type(constants.IncorrectPassword);
    }

    inputAdminUsername(){
        selectors.userNameField().type(constants.adminUsername);
    }

    inputAdminPassword(){
        selectors.userPasswordField().type(constants.adminPassword);
    }

    chooseAgency(){
        selectors.chooseAgency().select('Alta Hospice Care').should('have.value', 'AHCA');
    }
}

export const loginPage = new LoginPage();