import React from 'react';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          <a href="/detail">
            go to detail page
          </a>
        </li>
      </ul>
    </div>
  );
}
