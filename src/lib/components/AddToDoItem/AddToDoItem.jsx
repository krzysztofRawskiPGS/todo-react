import { useContext, useState } from 'react';
import styles from './AddToDoItem.module.css';
import { ToDoListContext } from '../../context/ToDoListContext.jsx';

export default function AddToDoItem() {
  const { addToDoItem } = useContext(ToDoListContext);
  const [toDoText, setToDoText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    toDoText && addToDoItem(toDoText);
    setToDoText('');
  }
  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="to-do-item"
        type="text"
        value={toDoText}
        onChange={(e) => setToDoText(e.target.value)}
      />
      <button className="btn">Add Item</button>
    </form>
  );
}
