const user = require("../fixtures/example.json");
describe("Password reset", () => {
  it("login", () => {
    cy.login(user.email, user.password);
  });
});
