class TablePage{
    tableData=[]
    private get getTableRows(){
        return cy.get('table.table-striped tbody tr')
    }

    getTableData():any{
        this.getTableRows.each($tr=>{
            let tableRow=[]
            cy.wrap($tr).find('td').each($td=>{
                cy.wrap($td).invoke('text').then((ele)=>{
                    tableRow.push(ele)
                })
            }).then(()=>{
                this.tableData.push(tableRow)
            })
        })
    }
    getRowCount():any{
        return cy.wrap(this.tableData).then((ele)=>{
            return ele.length
        })
    }
    getColumnCount():any{
        return cy.wrap(this.tableData).then(ele=>{
            return ele[0].length
        })
    }
    printNthRow(rowNumber):void{
        cy.wrap(this.tableData[rowNumber]).each(value=>{
            cy.log(value)
        })
    }
    printTableData():void{
        cy.wrap(this.tableData).each((row) => {
            cy.wrap(row).each((cell) => {
              cy.log(cell);
            });
        });
        
    }
}
export default new TablePage()