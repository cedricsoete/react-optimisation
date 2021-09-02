import { mount } from '@cypress/react';
import Team from './team';

context('Team', () => {
  it('affiche la team', () => {
    cy.fixture('team.json').then((team) => {
      const removeMember = cy.stub().as('remove');
      mount(<Team teamMembers={team} title="Heroes Team" removeMember={removeMember} />);
      cy.get('[data-cy=team-title]').should('have.text', 'Heroes Team');
      cy.get('[data-cy=hero-card').should('have.length', team.length).as('cards');
      cy.get('@cards').each(($item, index) => {
        cy.wrap($item).as('item');
        cy.get('@item').find('[data-cy=name]').should('have.text', team[index].name);
        cy.get('@item').find('[data-cy=thumb]').should('have.attr', 'src').should('eq', team[index].thumb);
      });

      cy.log('test suppression');
      cy.get('@cards').eq('2').find('[data-cy=remove]').click();
      cy.get('@remove').should('have.been.calledOnceWith', { id: team[2].id });
    });
  });

  it('affiche des cartes vides', () => {
    cy.fixture('team.json').then(([h1, h2, h3]) => {
      const teamFilter = [h1, h2, h3];
      const removeMember = cy.stub().as('remove');
      mount(<Team teamMembers={teamFilter} title="Heroes Team" removeMember={removeMember} />);
      cy.get('[data-cy=team-title]').should('have.text', 'Heroes Team');
      cy.get('[data-cy=hero-card').should('have.length', teamFilter.length).as('cards');
      cy.get('@cards').each(($item, index) => {
        cy.wrap($item).as('item');
        cy.get('@item').find('[data-cy=name]').should('have.text', teamFilter[index].name);
        cy.get('@item').find('[data-cy=thumb]').should('have.attr', 'src').should('eq', teamFilter[index].thumb);
      });
      cy.get('[data-cy=empty-card]').should('have.length', 2);
    });
  });
});
