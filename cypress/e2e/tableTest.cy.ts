import tablePage from '../pages/TablePage'

describe("should handle table",()=>{
    it("table handle",()=>{
        cy.visit("https://practice.expandtesting.com/dynamic-table")
        tablePage.getTableData()
        tablePage.getRowCount().then(ele=>{
            cy.log(ele)
        })
        tablePage.getColumnCount().then(ele=>{
            cy.log(ele)
        })
    })
})