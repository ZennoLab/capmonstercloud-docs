import React from 'react';
import styles from './styles.module.css';

const TaskImageWrapper = ({ children }) => {
  return (
    <div className={styles.wrap}>
      { children }
    </div>
  );
};

export default TaskImageWrapper;