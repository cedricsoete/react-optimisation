import { useState, useEffect } from 'react';
import { getWicked, getHeroes } from './services/characters.service';
import style from './team-selector.module.scss';
import HeroList from './components/hero-list/hero-list';
import Team from './components/team/team';
import { useTeam } from './hooks/use-team';

/**
 * @template T
 * @typedef {import('react').FC<T>} FC<T>
 */

/**
 * @typedef {import('./services/characters.service').Hero } Hero
 */

/**
 * @type {Hero[]}
 */
const defaultHeros = [];

/**
 * @type {Hero[]}
 */
const defaultWicked = [];

/**
 * @type {FC<{}>}
 */
const TeamSelector = () => {
  const [heroes, setHeroes] = useState(defaultHeros);
  const [wicked, setWicked] = useState(defaultWicked);

  const [heroesTeam, addHeros, removeHeros] = useTeam();
  const [wickedTeam, addWicked, removeWicked] = useTeam();

  useEffect(() => {
    getWicked().then(setWicked);
    getHeroes().then(setHeroes);
  }, []);

  return (
    <div className={style['selector-wrapper']}>
      <HeroList name="heros" title="Heros" list={heroes} selectItem={addHeros} canSelect={heroesTeam.length !== 5} />
      <div className={style['teams-wrapper']}>
        <Team teamMembers={heroesTeam} title="Team of Heros" removeMember={removeHeros} name="heros" />
        <Team teamMembers={wickedTeam} title="Team of Wicked" removeMember={removeWicked} name="wicked" />
      </div>
      <HeroList name="wicked" title="Wicked" list={wicked} selectItem={addWicked} canSelect={wickedTeam.length !== 5} />
    </div>
  );
};

export default TeamSelector;
