describe("visiti localhost 4200", () => {
  it("passes", () => {
    cy.visit("http://localhost:4200");
  });
});