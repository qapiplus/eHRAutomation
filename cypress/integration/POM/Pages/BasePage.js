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

    pageHeaderh3(){
        selectors.pageHeaderh3().should('contain.text', 'Welcome eHR!');
    }
    
}
export default BasePage;
