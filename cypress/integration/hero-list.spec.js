context('HeroList', () => {
  it('select heros', () => {
    cy.visit('/');
    cy.get('[data-cy=hero-list-heros]').as('heroList');
    cy.get('@heroList').within(() => {
      cy.get('[data-cy=hero-list-title]').should('contain.text', 'Heros');
      cy.get('[data-cy=hero-list-item]').should('have.length', 6);
      cy.get('[data-cy=hero-list-item]').eq(2).find('[data-cy=select-IronMan]').click();
    });
    cy.get('[data-cy=team-heros]').within(() => {
      cy.get('[data-cy=hero-card]')
        .should('have.length', 1)
        .find('[data-cy=name]').should('contain.text', 'IronMan');
    });
  });

  it('select wicked', () => {
    cy.visit('/');
    cy.get('[data-cy=hero-list-wicked]').as('heroList');
    cy.get('@heroList').within(() => {
      cy.get('[data-cy=hero-list-title]').should('contain.text', 'Wicked');
      cy.get('[data-cy=hero-list-item]').should('have.length', 3);
      cy.get('[data-cy=hero-list-item]').eq(2).find('[data-cy=select-Ultron]').click();
    });
    cy.get('[data-cy=team-wicked]').within(() => {
      cy.get('[data-cy=hero-card]')
        .should('have.length', 1)
        .find('[data-cy=name]').should('contain.text', 'Ultron');
    });
  });
});
