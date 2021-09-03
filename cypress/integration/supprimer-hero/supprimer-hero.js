import {
  When, Then, And, Given,
} from 'cypress-cucumber-preprocessor/steps';

Given('je suis sur le site', () => {
  cy.visit('/');
});

And('je sélectionne le hero {string}', (hero) => {
  cy.get('[data-cy=hero-list-heros]')
    .find('[data-cy=hero-list-item]')
    .find(`[data-cy=select-${hero}]`)
    .click();
});

When('je clic supprime du hero {string}', (hero) => {
  cy.get('[data-cy=team-heros]')
    .find('[data-cy=hero-card]')
    .find(`[data-cy=remove-${hero}]`)
    .click();
});

Then('la carte hero {string} n\'existe pas', (hero) => {
  cy.get('[data-cy=team-heros]')
    .find('[data-cy=hero-card]')
    .contains(hero)
    .should('not.exist');
});

And('la carte hero {string} est affiché', (hero) => {
  cy.get('[data-cy=team-heros]')
    .find('[data-cy=hero-card]')
    .should('contain.text', hero);
});
