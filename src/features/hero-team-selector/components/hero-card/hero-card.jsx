/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useCallback } from 'react';
import { string, func, number } from 'prop-types';
import style from './hero-card.module.scss';

/**
 * @template T
 * @typedef { import('react').FC<T> } FC<T>
 */

/**
 * @typedef {Object} HeroCardProps
 * @property {string} name
 * @property {string} thumb
 * @property {number} id
 * @property {(args: {id: number})=> void} remove
 */

/**
 * @type {FC<HeroCardProps>}
 */
const HeroCard = ({
  name, thumb, remove, id,
}) => {
  const removeHandler = useCallback(() => remove({ id }));
  return (
    <div className={style.card}>
      <span className={style['remove-btn']} onClick={removeHandler} role="button" tabIndex="0">X</span>
      <div className={style['img-wrapper']}>
        <img src={thumb} alt={name} />
      </div>
      <div className={style['member-name']}>
        {name}
      </div>
    </div>
  );
};
HeroCard.propTypes = {
  name: string.isRequired,
  thumb: string.isRequired,
  remove: func.isRequired,
  id: number.isRequired,
};

export default memo(HeroCard);
