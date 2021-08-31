import { memo } from 'react';
import {
  shape, string, arrayOf, func, number,
} from 'prop-types';
import HeroListItem from '../hero-list-item/hero-list-item';
import style from './hero-list.module.scss';

/**
 * @template T
 * @typedef { import('react').FC<T> } FC<T>
 */

/**
 * @typedef {import('../../services/characters.service').Hero} Hero
 */

/**
 * @typedef {Object} HeroListProps
 * @property {string} title
 * @property {Hero[]} list
 * @property {(hero: Hero) => void} selectItem
 */

/**
 * @type {FC<HeroListProps>}
 */
const HeroList = ({ title, list, selectItem }) => (
  <div className={style.list}>
    <h2>{title}</h2>
    {
      list.map((hero) => (
        <HeroListItem
          key={hero.id}
          name={hero.name}
          thumb={hero.thumb}
          select={() => selectItem(hero)}
        />
      ))
    }
  </div>
);

HeroList.propTypes = {
  title: string.isRequired,
  list: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    thumb: string.isRequired,
  })).isRequired,
  selectItem: func.isRequired,
};

export default memo(HeroList);
