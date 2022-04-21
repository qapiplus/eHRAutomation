import BasePage from './BasePage';
import * as selectors from "./LoginPageSelectors";
import * as constants from "../../../fixtures/Constants.json";

export class LoginPage extends BasePage{

    inputCorrectEmail() {
        selectors.userNameField().type(constants.email);
    }

    inputCorrectPassword() {
        selectors.userPasswordField().type(constants.email);
    }

    clickLoginButton(){
        selectors.loginButton().click();
    }

}

export const loginPage = new LoginPage();