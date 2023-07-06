describe("Password reset", () => {
  it.only("login", () => {
    cy.intercept(
      "GET",
      "https://trello.com/1/Members/me?organizations=all&organization_fields=products%2Cmemberships&fields="
    ).as("login");
    cy.visit("https://trello.com/home");
    cy.get(
      '.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]'
    ).click();
    cy.url().should("include", "/login");
    cy.get("#user").type("decc1453-a360-4a4d-9466-763471296492@mailslurp.com");
    cy.get("#login").click();
    cy.wait(4000);
    cy.get("#password").type("Azerty@1234").should("be.empty");
    cy.get("#login-submit > .css-178ag6o").click();
    cy.wait("@login").then((interception) => {
      // Vérifier le statut de la requête
      expect(interception.response.statusCode).to.equal(200);
    });
    /*cy.get('[data-testid="header-create-menu-button"]').click();
    cy.get(
      '[data-testid="header-create-board-button"] > .kgXqyT2weJmrQm'
    ).click();
    cy.get('[data-testid="create-board-title-input"]').type("seanrio fixter");
    cy.get('[data-testid="create-board-submit-button"]').click();
    cy.get(".placeholder").click();
    cy.get(".list-name-input").type("tittle");
    cy.get(".list-add-controls > .nch-button").click();
    cy.get(
      ":nth-child(4) > .list > .card-composer-container > .open-card-composer > .js-add-a-card"
    ).click();
    cy.get(".list-card-composer-textarea").type("card tittle");
    cy.get(".cc-controls-section > .nch-button").click();*/
    cy.get(":nth-child(1) > .board-tile > .board-tile-details").click();
    cy.wait(4000);
    cy.get(
      ':nth-child(1) > .list > .list-cards > [data-testid="trello-card"] > .list-card-details'
    ).trigger("mouseover");
  });
});
