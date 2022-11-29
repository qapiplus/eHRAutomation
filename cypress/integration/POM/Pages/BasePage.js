import * as selectors from "./BasePageSelectors";
import * as constants from "../../../fixtures/Constants.json";


class BasePage {

    navigateToTab(tabName) {
        cy.visit(`/${tabName}`);
    }

    checkPageHeader(header){
        selectors.pageHeader().should('contain.text',`${header}`);
    }
    clickAlertPopupContinueButton(){
        selectors.alertPopupContinueButton().click();
    }

    pageHeaderh3(){
        selectors.pageHeaderh3().should('contain.text', constants.pageHeaderh3);
    }
    popupModal(){
        selectors.popupModal().click();
    }
  
  
}
export default BasePage;
