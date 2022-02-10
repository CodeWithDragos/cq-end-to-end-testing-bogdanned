/// <reference types="cypress" />

// Welcome to Cypress!

// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("The Calculator", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });
  afterEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.get("[data-cy=btn-clear]").click();
  });

  describe("When two numbers that are both 0", () => {
    it("the subtraction result is 0", () => {
      cy.get("[data-cy=btn-zero]").click();
      cy.get("[data-cy=btn-minus]").click();
      cy.get("[data-cy=btn-zero]").click();

      cy.get("[data-cy=result]").should("have.text", "0");
    });
  });

  describe("Given two positive numbers", () => {
    describe("When the number are added", () => {
      it("returns the right sum", () => {
        cy.get("[data-cy=btn-seven]").click();
        cy.get("[data-cy=btn-plus]").click();
        cy.get("[data-cy=btn-eight]").click();
        cy.get("[data-cy=btn-equals]").click();

        cy.get("[data-cy=result]").should("have.text", "15");
      });
    });
  });

  describe("Given three positive numbers", () => {
    describe("When the first two numbers are added", () => {
      describe("And the last one is subtracted", () => {
        it("returns the right sum", () => {
          // sum
          cy.get("[data-cy=btn-seven]").click();
          cy.get("[data-cy=btn-plus]").click();
          cy.get("[data-cy=btn-eight]").click();
          cy.get("[data-cy=btn-equals]").click();

          // substraction
          cy.get("[data-cy=btn-minus]").click();
          cy.get("[data-cy=btn-five]").click();

          cy.get("[data-cy=btn-equals]").click();

          cy.get("[data-cy=result]").should("have.text", "10");
        });
      });
    });
  });

  describe("When two positive numbers have the same value", () => {
    it("the multiplication of both is correct", () => {
      cy.get("[data-cy=btn-five]").click();
      cy.get("[data-cy=btn-multiply]").click();
      cy.get("[data-cy=btn-five]").click();
      cy.get("[data-cy=btn-equals]").click();

      cy.get("[data-cy=result]").should("have.text", "25");
    });
    it("the subtraction of both is equal to 0", () => {
      cy.get("[data-cy=btn-five]").click();
      cy.get("[data-cy=btn-minus]").click();
      cy.get("[data-cy=btn-five]").click();
      cy.get("[data-cy=btn-equals]").click();

      cy.get("[data-cy=result]").should("have.text", "0");
    });
  });
});
