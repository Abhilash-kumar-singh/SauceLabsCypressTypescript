/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add('isSorted', (target,order='asc',isStringSort=true) => { 
    let original=[...target]
    let sortedArray;
    
    cy.wrap(target).then((target)=>{
        if(order=='asc' && isStringSort==true){
            sortedArray=target.sort()
        }else if(order=='desc' && isStringSort==true){
            sortedArray=target.sort((a,b)=>b.localeCompare(a))
        }else if(order=='asc' && isStringSort==false){
            sortedArray=target.sort((a,b)=>a-b)
        }else if(order=='desc' && isStringSort==false){
            sortedArray=target.sort((a,b)=>b-a)
        }
    }).then(()=>{
        if(isStringSort){
            return cy.wrap(original.join('')==sortedArray.join(''))
        }else{
            for (let i = 0; i < original.length; i++) {
                if (original[i] !== sortedArray[i]) {
                  return cy.wrap(false);
                }
              }
              return cy.wrap(true);
        }
        
    })
})