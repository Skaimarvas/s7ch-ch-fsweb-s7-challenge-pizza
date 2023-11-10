describe("form testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("sipariş süreci", () => {
    cy.get("#createorder").click();
    cy.get(`input[type="button"]`).then(($buttons) => {
      cy.wrap($buttons[0]).click().should("have.class", "selected");
    });
    cy.get("select").select("İnce");
    cy.get("select").should("have.value", "th");
    cy.get(`input[type="checkbox"]`).then(($checkboxes) => {
      const secilendeger = 7;

      for (let i = 0; i < secilendeger; i++) {
        cy.wrap($checkboxes[i]).check().should("be.checked");
      }
    });
    cy.get("#name-input").type("Deneme");
    cy.get("#name-input").should("have.value", "Deneme");
    cy.get("#special-text").type("Deneme");
    cy.get("#special-text").should("have.value", "Deneme");
    cy.get("#order-button").click();
  });
});
