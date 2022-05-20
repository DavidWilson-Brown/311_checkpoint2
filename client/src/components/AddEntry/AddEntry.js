import React, { useState } from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';

// import '../MemoryTool/MemoryTool';
import Quotable from '../Quotable/Quotable';
import styles from './addEntry.module.css';

export default function AddEntry({ scripts, addEntry }) {
  console.log('add entry props:', scripts.length)

  const [entry, setEntry] = useState({
    title: "",
    playwright: "",
    character: "",
    dialogue: ""
  });

  const handleChange = (event) => {
    const newEntry = { ...entry };
    newEntry[event.target.id] = event.target.value;
    
    setEntry(newEntry);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = { ...entry };
    payload.id = scripts.length + 1;
    addEntry(payload);

    setEntry({
      title: "",
      playwright: "",
      character: "",
      dialogue: ""
    })
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            name="title"
            label="Title (ex: Death of a Salesman)"
            type="text"
            id="title"
            value={entry.title}
            onChange={handleChange} />
          <TextField
            name="playwright"
            label="Playwright (ex: Arthur Miller)"
            type="text"
            id="playwright"
            value={entry.playwright}
            onChange={handleChange} />
          <TextField
            name="character"
            label="Character (ex: Willy Loman)"
            type="text" 
            id="character"
            value={entry.character}
            onChange={handleChange} />
          <TextField
            name="dialogue"
            label="Dialogue (ex: I'm vital in New England.)"
            type="text" 
            id="dialogue"
            value={entry.dialogue}
            onChange={handleChange} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 25, width: 300 }}>
          Save</Button>
        </form>
      </div>
      
      <div className={styles.quoteContainer}>
        <Quotable /> 
      </div>
    </div>
  )
}