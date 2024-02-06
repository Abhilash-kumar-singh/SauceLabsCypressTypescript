import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'

describe("should validate inventory page",()=>{
    before(()=>{
        cy.fixture('InventoryToCart.json').as('items')
    })

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
        loginPage.login("standard_user","secret_sauce")
    })

    it("should validate cart counter, when item is added to cart",()=>{
        //Adding element and verifying counter
        cy.get('@items').then(products=>{
            cy.wrap(products.product).each((item,index)=>{
                inventoryPage.addOrRemoveItemToCartViaName(item.name)
                inventoryPage.getCartCounter()
                    .should('be.equal',(index+1).toString())
                inventoryPage.isAddedToCart(item.name)
                    .should('be.true')
            })
        })
        //Remove element and verifying counter
        cy.get('@items').then(products=>{
            cy.wrap(products.product).each((item,index)=>{
                inventoryPage.addOrRemoveItemToCartViaName(item.name)
                if(index!=2){
                    inventoryPage.getCartCounter()
                    .should('be.equal',(3-index-1).toString())
                }
                inventoryPage.isAddedToCart(item.name)
                    .should('be.false')
            })
        })
        
    })
    /*
    * For sake of visibility, separate testcases are
    * created for each filter. Rather we can also do it
    * under same testcase
    */

    it('should validate sorting of products via name in ascending order',()=>{
        inventoryPage.sortProduct("Name (A to Z)")
        let itemList=inventoryPage.getAllInventoryItemsName()
        cy.isSorted(itemList,'asc',true).should('be.true')
    })

    it('should validate sorting of products via name in decending order',()=>{
        inventoryPage.sortProduct("Name (Z to A)")
        let itemList=inventoryPage.getAllInventoryItemsName()
        cy.isSorted(itemList,'desc',true).should('be.true')
    })

    it('should validate sorting of products via price in ascending order',()=>{
        inventoryPage.sortProduct("Price (low to high)")
        let itemList=inventoryPage.getAllInventoryItemsPrice()
        cy.isSorted(itemList,'asc',false).should('be.true')
    })

    it('should validate sorting of products via price in decending order',()=>{
        inventoryPage.sortProduct("Price (high to low)")
        let itemList=inventoryPage.getAllInventoryItemsPrice()
        cy.isSorted(itemList,'desc',false).should('be.true')
    })
})