import React from 'react';
import styles from './textcard.module.css';

export default function Details(props) {
  const id = props.match.params.id;
  const script = props.scripts.find(s => s.id == id);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h2>{script.title}</h2>
        <h3>{script.playwright}</h3>
        <h4>{script.character}</h4>
        <p className={styles.dialogue}>{script.dialogue}</p>
      </div>
    </div>
  )
}