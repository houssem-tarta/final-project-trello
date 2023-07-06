describe("Http Request", () => {
  it("Get Request", () => {
    cy.request({
      method: "GET",
      url: "https://api.trello.com/1/actions/{6492fc8ea0889edfd97e8f9d}/",
      headers: {
        APIKey: "38cdfbc01d2461a34e6fb28606d07bad",
        "x-auth-token":
          "ATTA383f7cde818b5c23f0f403fc311ead253a80d0ef578d554c598278136a1a8bc039CCE5DB",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
