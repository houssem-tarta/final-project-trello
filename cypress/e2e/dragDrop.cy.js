const user = require("../fixtures/example.json");

describe("Drag and Drop", () => {
  it("test 1", () => {
    cy.login(user.email, user.password);
    cy.get(":nth-child(1) > .board-tile > .board-tile-details").click();
    cy.get(".list-card-details.js-card-details")
      .eq(0)
      .move({ deltaX: 100, deltaY: 100 });
  });
  it.only("Drag And Drop", () => {
    cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html");
    cy.get("div#todrag span:nth-of-type(1)")
      .drag("#mydropzone")
      .then((success) => {
        assert.isTrue(success);
      });
  });
});
