import { useContext } from 'react';
import styles from './ToDoItem.module.css';
import { ToDoListContext } from '../../context/ToDoListContext.jsx';

export default function ToDoItem({ toDoItem }) {
  const { deleteToDoItem } = useContext(ToDoListContext);

  return (
    <div className={styles.item}>
      <p>{toDoItem.text}</p>
      <button
        className={`btn ${styles.delete}`}
        onClick={() => deleteToDoItem(toDoItem.id)}
      >
        Delete
      </button>
    </div>
  );
}
