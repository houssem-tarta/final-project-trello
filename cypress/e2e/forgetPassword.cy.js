describe("Password reset", () => {
  it("login", () => {
    cy.visit("https://trello.com/");
    cy.get(
      '.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]'
    ).click();
    cy.wait(4000);
    cy.url().should("include", "/login");
    cy.get("#user").type("decc1453-a360-4a4d-9466-763471296492@mailslurp.com");
    cy.get("#login").click();
    cy.get("#resetPassword").click();
    cy.get("#reset-password-email-submit").click();
    cy.mailslurp()
      .then((mailslurp) =>
        mailslurp.waitForLatestEmail(
          "decc1453-a360-4a4d-9466-763471296492",
          4000,
          true
        )
      )
      .then(
        (
          email //expect(email.subject).to.contain("Définissez votre nouveau mot de passe Atlassian"))
        ) => cy.document().invoke("write", email.body)
      );
    cy.get('[style="margin-top:24px;margin-bottom:24px"] > a').click();
    cy.url().should("include", "/login/changepassword");

    cy.get("#password").type("Azerty@12345");
    cy.get("#change-password").click();
  });
});
