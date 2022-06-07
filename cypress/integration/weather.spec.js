/// <reference types="cypress" />

// Welcome to Cypress!

// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("The Weather App", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.intercept(
      {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/*",
      },
      {
        statusCode: 200,
        fixture: "berlin-weather",
      }
    ).as("api-request");
    cy.visit("http://localhost:3000/weather.html");
  });

  describe("Given a city", () => {
    it("returns the right temperature", () => {
      // type a city
      cy.get("[data-cy=input-search]").clear().type("Berlin{enter}")
      // wait for the response
      cy.waitFor("@api-request")
      // check that the weather is displayed correctly
      cy.get('[data-cy=container-temp]').should("contain.text", "8.81")
    });
  });
});
