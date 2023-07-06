describe("Password reset", () => {
  it("login", () => {
    cy.visit("https://trello.com/");
    cy.get(
      '.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]'
    ).click();
    cy.wait(4000);
    cy.url().should("include", "/login");
    cy.get("#user").type("c55919e4-7c17-4680-9523-a2574b34d6f3@mailslurp.com");
    cy.get("#login").click();
    cy.get("#resetPassword").click();
    cy.get("#reset-password-email-submit").click();
    cy.wait(5000);
    cy.mailslurp()
      .then((mailslurp) =>
        mailslurp.waitForLatestEmail(
          "c55919e4-7c17-4680-9523-a2574b34d6f3",
          40000,
          true
        )
      )
      .then(
        (
          email //expect(email.subject).to.contain("Nouveau mot de passe"))
        ) => {
          console.log(email);
          cy.pause();
          cy.document().invoke("write", email.body);
        }
      );
  });
});
