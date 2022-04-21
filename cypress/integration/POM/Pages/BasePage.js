import * as selectors from "./BasePageSelectors";

class BasePage {

    navigateToTab(tabName) {
        cy.visit(`/${tabName}`);
    }

    checkPageHeader(header){
        selectors.pageHeader().should('contain.text',`${header}`);
    }

}
export default BasePage;
