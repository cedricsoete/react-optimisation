/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import {
  arrayOf, shape, string, func, number,
} from 'prop-types';
import EmptyCard from '../empty-card/empty-card';
import HeroCard from '../hero-card/hero-card';
import style from './team.module.scss';

const totalTeam = 5;

/**
 * @template T
 * @typedef { import('react').FC<T> } FC<T>
 */

/**
 * @typedef { import('../../services/characters.service').Hero} Hero
 */

/**
 * @typedef {Object} TeamProps
 * @property {Hero[]} teamMembers
 * @property {string} title
 * @property {(args: {id: number})=> void} removeMember
 * @property {string} name
 */

/**
 * @type {FC<TeamProps>}
 */
const Team = ({
  teamMembers, title, removeMember, name,
}) => (
  <div className={style['team-wrapper']} data-cy={`team-${name}`}>
    <h2 data-cy="team-title">{title}</h2>
    <div className={style.team}>
      {teamMembers.map((member) => (
        <HeroCard
          key={member.id}
          id={member.id}
          name={member.name}
          thumb={member.thumb}
          remove={removeMember}
        />
      ))}
      {
        new Array(totalTeam - teamMembers.length).fill(0).map((_, index) => (
          <EmptyCard key={`empty-${index}`} />
        ))
      }
    </div>
  </div>
);
Team.propTypes = {
  name: string.isRequired,
  teamMembers: arrayOf(shape({
    name: string.isRequired,
    thumb: string.isRequired,
    id: number.isRequired,
  })).isRequired,
  title: string.isRequired,
  removeMember: func.isRequired,
};

export default memo(Team);
