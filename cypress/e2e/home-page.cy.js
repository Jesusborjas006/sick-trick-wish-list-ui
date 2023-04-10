describe("Main page", () => {
  // beforeEach(() => {
  //   cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
  //     statusCode: 200,
  //     fixture: "tricks.json",
  //   });
  //   cy.visit("http://localhost:3000/");
  // });

  it("Should visit the home page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Should have a title", () => {
    cy.get("h1").contains("Sick Trick Wish List");
  });

  it("Should have a form with multiple inputs and a button", () => {
    cy.get("form").should("exist");
    cy.get('[name="stance"]').should("exist");
    cy.get('[name="name"]').should("exist");
    cy.get('[name="obstacle"]').should("exist");
    cy.get('[name="tutorial"]').should("exist");
    cy.get("button").should("exist");
  });

  it("Should display three different tricks", () => {
    cy.get(".tricks-container").should("exist");
    cy.get(".tricks-container > :nth-child(1)")
      .should("be.visible")
      .contains("flat ground");
    cy.get(".tricks-container > :nth-child(2)")
      .should("be.visible")
      .contains("stairs");
    cy.get(".tricks-container > :nth-child(3)")
      .should("be.visible")
      .contains("ledge");
  });
});
