import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ToDoListContextProvider } from './lib/context/ToDoListContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoListContextProvider>
      <App />
    </ToDoListContextProvider>
  </React.StrictMode>
);
