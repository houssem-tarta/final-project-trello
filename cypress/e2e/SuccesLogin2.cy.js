describe("Password reset", () => {
  it.only("login", () => {
    cy.visit("https://trello.com/home");
    cy.get(
      '.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]'
    ).click();
    cy.url().should("include", "/login");
    cy.get("#user").type("decc1453-a360-4a4d-9466-763471296492@mailslurp.com");
    cy.get("#login").click();
    cy.wait(4000);
    cy.get("#password").type("Azerty@1234").should("be.empty");
    cy.get("#login-submit > .css-178ag6o").click().should("be.visible");
  });
});
