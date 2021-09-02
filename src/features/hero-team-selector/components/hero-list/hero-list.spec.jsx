import { mount } from '@cypress/react';
import HeroList from './hero-list';

context('hero-list', () => {
  it('affiche la liste des heros', () => {
    const heroes = [
      {
        id: 2,
        name: 'Deadpool',
        thumb: 'https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99/standard_xlarge.jpg',
      },
      {
        id: 3,
        name: 'IronMan',
        thumb: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
      },
    ];
    const select = cy.stub().as('select');
    mount(<HeroList list={heroes} title="Heros" selectItem={select} name="heros" />);
    cy.get('[data-cy=hero-list-title]').should('have.text', 'Heros');
    cy.get('[data-cy=hero-list-item]').as('items');
    cy.get('@items').should('have.length', 2);
    cy.get('@items').each(($item, index) => {
      cy.wrap($item).as('item');
      cy.get('@item').find('[data-cy=name]').should('have.text', heroes[index].name);
      cy.get('@item').find('[data-cy=thumb]').should('have.attr', 'src').should('eq', heroes[index].thumb);
    });

    cy.get('@items').eq(1).find('[data-cy=select-IronMan]').click();
    cy.get('@select').should('have.been.calledOnceWith', heroes[1]);
  });
});
