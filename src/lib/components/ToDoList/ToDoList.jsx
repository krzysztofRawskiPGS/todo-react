import { useContext } from 'react';
import { ToDoListContext } from '../../context/ToDoListContext.jsx';
import styles from './ToDoList.module.css';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';

export default function ToDoList() {
  const { toDoList } = useContext(ToDoListContext);

  return (
    <div className={styles.list}>
      {toDoList.map((toDoItem) => (
        <ToDoItem toDoItem={toDoItem} key={toDoItem.id} />
      ))}
    </div>
  );
}
