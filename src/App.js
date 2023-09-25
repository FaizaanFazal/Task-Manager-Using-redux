import React from 'react';
import { Task } from './features/taskManager/Task';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['App']}>
      <Task/>
    </div>
  );
}

export default App;
