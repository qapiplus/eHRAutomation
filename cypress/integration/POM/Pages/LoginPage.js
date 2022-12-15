import BasePage from './BasePage';
import * as selectors from "./LoginPageSelectors";
import * as constants from "../../../fixtures/Constants.json";

export class LoginPage extends BasePage{

    inputCorrectHospiceEmail() {
        selectors.userNameField().type(constants.correctHospiceEmail);
    }
    inputCorrectHomeHealthEmail(){
        selectors.userNameField().type(constants.correctHomeHealthEmail);
    }
    inputCorrectEmailByChoosingAgency(){
        selectors.userNameField().type(constants.correctEmailwithManyAgencies);
    }

    inputCorrectHospicePassword() {
        selectors.userPasswordField().type(constants.correctHospicePassword);
    }
    inputCorrectHomeHealthPassword(){
        selectors.userPasswordField().type(constants.correctHomeHealthPassoword);
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
        selectors.chooseAgency().select(constants.agency_name);
    }
    checkheaderUsername(){
        selectors.headerUserName();
    }
    checkAlertPopupErrorMessage(alerttext){
        selectors.alertPopupText().should("have.text",alerttext);
    }

 

}

export const loginPage = new LoginPage();