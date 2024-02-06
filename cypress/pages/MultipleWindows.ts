class MultipleWindows{
    get newWindowAnchor(){
        return cy.get('div.row').contains('a','Click Here')
    }
    
    removeTargetAttr():any{
        this.newWindowAnchor.invoke('removeAttr','target')
            .click()
        
    }
    openViaHref():any{
        return this.newWindowAnchor.invoke('attr','href')
            .then(val=>{
                return val
            })
    }
    openViaHrefV2():any{
        return this.newWindowAnchor.then($ele=>{
            cy.wrap($ele).invoke('attr','href')
            .then(val=>{
                return val
            })
        })
    }
}
export default new MultipleWindows();