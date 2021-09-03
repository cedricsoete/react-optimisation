import { memo } from 'react';
import { card } from './empty-card.module.scss';

/**
 * @template T
 * @typedef { import('react').FC<T> } FC<T>
 */

/**
 * @type {FC<{}>}
 */
const EmptyCard = () => (
  <div data-cy="empty-card" className={card}>
    <img src="/img/default-member.jpg" alt="Empty Slot" />
  </div>
);

export default memo(EmptyCard);
