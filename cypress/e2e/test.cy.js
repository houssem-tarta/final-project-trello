describe("Password reset", () => {
  it("reset password", () => {
    cy.visit('https://trello.com/')
    cy.get('.eXMZwc > [data-testid="ui-email-signup-form"] > .link-buttonstyles__BxpButton-sc-1utqn26-1 > button').click()
    
    cy.mailslurp()
      .then((mailslurp) =>
        mailslurp.waitForLatestEmail(
          "1887dd6a-5587-4416-925a-18894b349d02",
          4000,
          true
        )
      )
      .then(
        (
          email //expect(email.subject).to.contain("Nouveau mot de passe"))
        ) => cy.document().invoke("write", email.body)
      );
    cy.origin("https://id.atlassian.com", () => {
      cy.wait(5000);
      cy.get('[style="margin-top:28px"] > a').click();
      cy.get("#displayName").type("houssem");
      cy.get('[data-testid="password-container"]').type("Azerty@1234");
      cy.get("#signup-submit").click();
    });
  });
});
