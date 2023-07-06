const user = require("../fixtures/example.json");

describe("Drag and Drop", () => {
  it("test 1", () => {
    cy.login(user.email, user.password);
    cy.get(":nth-child(2) > .board-tile > .board-tile-details").click();
    cy.get(
      ':nth-child(2) > .list > .list-cards > [data-testid="trello-card"] > .list-card-details'
    ).click();
    cy.get(".u-clearfix > .js-attach").click();
    cy.get(".js-attach-file").attachFile("lastVersion.pdf");
    cy.get(".js-add-attachment-url").click();
    cy.get(".attachment-thumbnail-details").contains("lastVersion.pdf");
    cy.get(
      ":nth-child(3) > .attachment-thumbnail-details-title-options-item > .attachment-thumbnail-details-options-item-text"
    ).click();
    cy.get(".pop-over-content > :nth-child(1) > div > [data-testid]").click();
  });
});
