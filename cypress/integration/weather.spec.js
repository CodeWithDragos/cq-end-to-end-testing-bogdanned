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
        body: {
          coord: { lon: 13.4105, lat: 52.5244 },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
          base: "stations",
          main: {
            temp: 8.57,
            feels_like: 6.71,
            temp_min: 7.23,
            temp_max: 10.01,
            pressure: 1008,
            humidity: 83,
          },
          visibility: 10000,
          wind: { speed: 3.13, deg: 180 },
          clouds: { all: 40 },
          dt: 1644482760,
          sys: {
            type: 2,
            id: 2011538,
            country: "DE",
            sunrise: 1644474770,
            sunset: 1644509309,
          },
          timezone: 3600,
          id: 2950159,
          name: "Berlin",
          cod: 200,
        },
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
      cy.get('[data-cy=container-temp]').should("contain.text", "8.57")
    });
  });
});
