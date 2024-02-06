import multipleWindowHandler from '../pages/MultipleWindows'

describe("should handle multiple window",()=>{
    it("should go to same window be removing target",()=>{
        cy.visit("https://practice.expandtesting.com/windows")
        multipleWindowHandler.removeTargetAttr()
        
        cy.url().should('include','new')
        cy.get('h1').should('include.text','new window')
        //go back to parent window
        cy.go('back')
    })
    it("should go to same window by accessing href",()=>{
        cy.visit("https://practice.expandtesting.com/windows")
        multipleWindowHandler.openViaHrefV2().then(newEndPoint=>{
            let baseUrl;
            cy.url().then(ele=>{
                baseUrl=ele.split('/windows')[0]+newEndPoint
            }).then(()=>{
                cy.visit(baseUrl)
            })
        })
    })
})