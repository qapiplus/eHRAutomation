import { changePassword } from "../Pages/ChangePassword";
import { loginPage } from "../Pages/LoginPage";

describe('Check Change Password functionality',() =>{

    beforeEach(() => {
        changePassword.navigateToTab('UserDashboard#')
    });

    it('is possible to change password by inputing matching passwords', () =>{
      changePassword.goChangePassword();
      changePassword.chooseChangePassword();
      changePassword.inputNewPassword();
      changePassword.ConfirmNewPassword();
      changePassword.SubmitNewPassword();
    })


})