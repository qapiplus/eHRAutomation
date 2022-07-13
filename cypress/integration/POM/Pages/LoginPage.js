import BasePage from './BasePage';
import * as selectors from "./LoginPageSelectors";
import * as constants from "../../../fixtures/Constants.json";

export class LoginPage extends BasePage{

    inputCorrectEmail() {
        selectors.userNameField().type(constants.correctEmail);
    }

    inputCorrectPassword() {
        selectors.userPasswordField().type(constants.correctPassword);
    }

    inputIncorrectEmail(){
        selectors.userNameField().type(constants.incorrectEmail);
    }

    inputIncorrectPassword(){
        selectors.userPasswordField().type(constants.incorrectPassword);
    }

    inputAdminEmail(){
        selectors.userNameField().type(constants.adminEmail);
    }
    inputAdminPassword(){
        selectors.userPasswordField().type(constants.adminPassword);
    }

    clickLoginButton(){
        selectors.loginButton().click();
    }

}

export const loginPage = new LoginPage();