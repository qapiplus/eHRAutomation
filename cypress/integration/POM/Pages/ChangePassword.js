import BasePage from './BasePage';
import * as selectors from "./ChangePasswordSelectors";
import * as constants from "../../../fixtures/Constants.json";

export class ChangePassword extends BasePage{

    goChangePassword(){
        selectors.userNameField().click();
    }

    chooseChangePassword(){
        selectors.changePasswordModal().click();
    }

    inputNewPassword(){
        selectors.inputNewPassword().type(constants.newPasswordField);
    }

    ConfirmNewPassword(){
        selectors.ConfirmNewPassword().type(constants.ConfirmNewPassword);
    }

    SubmitNewPassword(){
        selectors.SubmitNewPassword().click();
    }
}

export const changePassword = new ChangePassword();