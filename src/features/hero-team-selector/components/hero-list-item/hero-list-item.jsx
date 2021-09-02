import { memo } from 'react';
import { string, func } from 'prop-types';
import style from './hero-list-item.module.scss';

/**
 * @template T
 * @typedef { import('react').FC<T> } FC<T>
 */

/**
 * @template T
 * @typedef { import('react').MouseEventHandler<T>} MouseEventHandler<T>
 */

/**
 * @typedef {Object} HeroListItemProps
 * @property {string} name
 * @property {string} thumb
 * @property {MouseEventHandler<HTMLButtonElement>} select
 */

/**
 * @type {FC<HeroListItemProps>}
 */
const HeroListItem = ({ name, thumb, select }) => (
  <div data-cy="hero-list-item" className={style.item}>
    <img data-cy="thumb" src={thumb} alt={name} />
    <div className={style['item-infos']}>
      <span data-cy="name">{name}</span>
      <div className={style.actions}>
        <button data-cy="select" type="button" className={style.btn} onClick={select}>Select</button>
      </div>
    </div>
  </div>
);

HeroListItem.propTypes = {
  name: string,
  thumb: string,
  select: func.isRequired,
};

HeroListItem.defaultProps = {
  name: null,
  thumb: null,
};

export default memo(HeroListItem);
