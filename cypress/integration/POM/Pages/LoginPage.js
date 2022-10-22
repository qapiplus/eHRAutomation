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

    clickLoginButton(){
        selectors.loginButton().click();
    }

    inputIncorrectEmail(){
        selectors.userNameField().type(constants.incorrectEmail);
    }

    inputIncorrectPassword(){
        selectors.userPasswordField().type(constants.incorrectPassword);
    }

    inputAdminUsername(){
        selectors.userNameField().type(constants.adminUsername);
    }

    inputAdminPassword(){
        selectors.userPasswordField().type(constants.adminPassword);
    }

    chooseAgency(){
        selectors.chooseAgency().select('Louisa Agency');
    }

    popupModal(){
        selectors.popupModal().click();
    }
    checkheaderUsername(){
        selectors.headerUserName();
    }

}

export const loginPage = new LoginPage();