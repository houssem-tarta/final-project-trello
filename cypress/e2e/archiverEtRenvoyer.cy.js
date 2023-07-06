const user = require("../fixtures/example.json");

describe("creationCard archiver et renvoyer", () => {
  it.only("login", () => {
    cy.login(user.email, user.password);
    cy.get(":nth-child(2) > .board-tile > .board-tile-details").click();
    cy.get(".placeholder").click();
    cy.get(".list-name-input").type("creat Delete Teste");
    cy.get(".list-add-controls > .nch-button").click();
    cy.get(
      ':nth-child(4) > .list > [data-testid="list-header"] > .list-header-extras > .list-header-extras-menu'
    ).click();
    cy.get(".js-close-list").click();
    cy.get(
      '.GDunJzzgFqQY_3 > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]'
    ).click({ force: true });
    cy.get(":nth-child(5) > .board-menu-navigation-item-link").click();
    cy.get(
      ":nth-child(1) > :nth-child(4) > .board-menu-navigation-item-link"
    ).click();
    cy.wait(5000);
    cy.get(".archive-controls-switch").click();
    cy.get(".archive-list > :nth-child(1)").click();
    cy.get(".board-menu-header-close-button").click();
  });
});
