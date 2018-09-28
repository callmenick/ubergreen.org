import React from 'react';
import css from 'components/Benefits/Benefits.module.scss';

function Benefits() {
  return (
    <div id="benefits" className={css.container}>
      <h2 className={css.title}>Cacao nibs are packed with health benefits!</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Muscle maintenance</span>
        </li>
        <li className={css.item}>
          <span>Weight loss</span>
        </li>
        <li className={css.item}>
          <span>Anemia prevention</span>
        </li>
        <li className={css.item}>
          <span>Reduced risk of coronary disease and stroke</span>
        </li>
        <li className={css.item}>
          <span>Enhanced moods</span>
        </li>
      </ul>
    </div>
  );
}

export default Benefits;
