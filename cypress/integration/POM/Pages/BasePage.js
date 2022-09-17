import * as selectors from "./BasePageSelectors";

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

    checkpageHeaderp3(header){
        selectors.pageHeaderh3().should('contain.text', `${header}`);
    }

    
}
export default BasePage;
