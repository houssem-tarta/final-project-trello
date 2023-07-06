const user = require("../fixtures/example.json");

describe("Drag and Drop", () => {
  it("test 1", () => {
    cy.login(user.email, user.password);
    cy.get(":nth-child(2) > .board-tile > .board-tile-details").click();
    cy.get(
      ":nth-child(1) > .list > .card-composer-container > .open-card-composer > .js-add-a-card"
    ).click();
    cy.get(".list-card-composer-textarea").type("Checklist");
    cy.get(".cc-controls-section > .nch-button").click();
    cy.get('[href="/c/pPBhrgHp/33-checklist"] > .list-card-details').click();
    cy.wait(2000);
    cy.get(".js-add-checklist-menu").click();
    cy.get("#id-checklist").clear().type("To Do");
    cy.wait(2000);
    cy.get("form > .nch-button").click();
    cy.get(".window-main-col").click();
    cy.wait(2000);
    cy.get(".js-new-checklist-item-button").click();
    cy.get(".checklist-new-item > .edit").type(1);
    cy.get(".checklist-add-controls > .nch-button--primary").click();
    cy.get(".checklist-new-item > .edit").type("2");
    cy.get(".checklist-add-controls > .nch-button--primary").click();
    cy.get(':nth-child(1) > [data-testid="checklist-item-checkbox"]').click();
    cy.get(".icon-md").click();
    cy.get(".js-archive-card").click();
    cy.get(".js-delete-card").click();
  });
});
