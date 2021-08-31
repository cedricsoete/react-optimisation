import { useState } from 'react';

/**
 * @typedef {import('../services/characters.service').Hero} Hero
 */

/**
 * @returns {[Hero[], (member: Hero) => void, (args: { id: number}) => void]}
 */
export function useTeam() {
  const [team, setTeam] = useState([]);

  /**
   * @type {(member: Hero) => void}
   */
  const addTeam = (member) => {
    const id = team.reduce((acc, cur) => (acc.id > 0 ? acc.id : cur.id + 1), 0);
    setTeam([...team, { ...member, id }]);
  };

  /**
   * @type {(args: { id: number}) => void }
   */
  const removeTeam = ({ id }) => {
    setTeam((data) => data.filter((hero) => hero.id !== id));
  };

  return [team, addTeam, removeTeam];
}
