export default class Page{
    /**
    * This class contains all locators and functions
    * which are common to other pages
    * e.g. left hamburger nav items or cart counter
    */

    private get cartCounter(){
        return cy.get('.shopping_cart_badge')
    }
    getCartCounter():any{
        return this.cartCounter.invoke('text').then(el=>{
            return cy.wrap(el)
        })
    }
}