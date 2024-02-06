class LoginPage{
    private get usernameField(){
        return cy.get('#user-name')
    }
    private get passwordField(){
        return cy.get('#password')
    }
    private get loginButton(){
        return cy.get('#login-button')
    }
    private get errorField(){
        return cy.get('h3[data-test="error"] button')
    }
    login(username:string, password:string):void{
        this.usernameField.clear()
        this.passwordField.clear()
        if(username!=""){
            this.usernameField.type(username)
        }
        if(password!=""){
            this.passwordField.type(password)
        }
        this.loginButton.click()
    }
    isErrorVisible():any{
        return this.errorField.then($el=>{
            return Cypress.dom.isAttached($el)
        })
    }
    getAttributeValueOfUsernameField():any{
        return this.usernameField.invoke('attr','id')
            .then(ele=>{
                return ele
            })
    }
}
export default new LoginPage()
