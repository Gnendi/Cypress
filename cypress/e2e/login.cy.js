/// <reference types="Cypress" />

describe("login tests", () => {

    it ("login with unregistred user", () => {
        cy.visit ("/");
        cy.get ("a[href='/login']").click();
        cy.get("#email").type("random@gmail.com");
        cy.get("#password").type("Test12345");
        cy.get("button").click();
        cy.url().should ("contain", "/login")
    });

    it ("register without email addres provide", () => {
        cy.visit ("/");
        cy.get ("a[href='/login']").click();
        cy.get("#password").type("Test12345");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    });
    
    it ("login with valide credentials", () => {
        cy.visit ("/");
        cy.get ("a[href='/login']").click();
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("nedovic.filip@gmail.com");
        cy.get("#password").type("Test12345");
        cy.get("button").click();
    });
});

it ("logout", ()=>{
    cy.visit ("/");
    cy.get (" .nav-link").eq(1).click();
    cy.get("#email").type("nedovic.filip@gmail.com");
    cy.get("#password").type("Test12345");
    cy.get("button").click();
    cy.url().should("not.contain", "/login");
    // cy.wait(1500);
    cy.get(".nav-link").eq(3).click();
})


