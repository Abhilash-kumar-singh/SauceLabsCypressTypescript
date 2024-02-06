import loginPage from '../pages/LoginPage'

describe("should validate login feature",()=>{
    before("Getting userData fixture",()=>{
        cy.fixture('LoginUserData.json').as('Users')
    })
    it("first test",()=>{
        cy.visit("/index.html")
        cy.get('@Users').each(user=>{
            loginPage.login(user.username,user.password)
            cy.url().then(url=>{
                if(user.isCorrectCredential){
                    cy.wrap(url).should('include','inventory.html')
                }else{
                    cy.wrap(url).should('include','index.html')
                }
            })
        })
    })
})