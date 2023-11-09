describe("form testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("sipariş ver butonu", () => {
    cy.get("#createorder").click();
  });
});
