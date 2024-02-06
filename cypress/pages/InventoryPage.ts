import Page from './Page'
class InventoryPage extends Page{
    private get allInventoryItemsName(){
        return cy.get('.inventory_item_name')
    }
    private get allInventoryItemsPrice(){
        return cy.get('.inventory_item_price')
    }
    private get sortDropdown(){
        return cy.get('.product_sort_container')
    }
    getAllInventoryItemsName():any{
        let itemList=[]
        this.allInventoryItemsName.each($item=>{
            cy.wrap($item).invoke('text')
                .then(name=>{
                    itemList.push(name)
                })
        })
        return itemList
    }
    getAllInventoryItemsPrice():any{
        let itemList=[]
        let amount;
        this.allInventoryItemsPrice.each($item=>{
            cy.wrap($item).invoke('text')
                .then(name=>{
                    name=name.split("$")[1]
                    amount=parseFloat(name)
                    itemList.push(amount)
                })
        })
        return itemList
    }
    addOrRemoveItemToCartViaName(name:string):void{
        cy.contains('div',name).parents('div.inventory_item_label')
            .siblings('div.pricebar').find('button')
            .click()
    }
    isAddedToCart(name:string):any{
        return cy.contains('div',name).parents('div.inventory_item_label')
        .siblings('div.pricebar').find('button')
        .invoke('text').then(name=>{
            return name=='REMOVE'
        })
    }
    sortProduct(target:any):void{
        this.sortDropdown.select(target)
    }
}
export default new InventoryPage();