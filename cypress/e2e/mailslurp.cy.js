describe("email test", () => {
  it("mailSlurp", () => {
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
        ) => cy.document().invoke("write", email.body)
      );
  });
});
