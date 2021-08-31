import {
  shape, string, arrayOf, func, number, bool,
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
 * @prop {string} name
 * @property {string} title
 * @property {Hero[]} list
 * @property {(hero: Hero) => void} selectItem
 * @property {boolean} canSelect
 */

/**
 * @type {FC<HeroListProps>}
 */
const HeroList = ({
  title, list, selectItem, name, canSelect,
}) => (
  <div data-cy={`hero-list-${name}`} className={style.list}>
    <h2 data-cy="hero-list-title">{title}</h2>
    {
      list.map((hero) => (
        <HeroListItem
          key={hero.id}
          name={hero.name}
          thumb={hero.thumb}
          canSelect={canSelect}
          select={() => selectItem(hero)}
        />
      ))
    }
  </div>
);

HeroList.propTypes = {
  canSelect: bool,
  name: string.isRequired,
  title: string.isRequired,
  list: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    thumb: string.isRequired,
  })).isRequired,
  selectItem: func.isRequired,
};

HeroList.defaultProps = {
  canSelect: false,
};

export default HeroList;
