import React from 'react';
import styles from './styles.module.css';
import { PriceRateProvider } from './PriceRateProvider';
const TaskImageWrapper = ({ children }) => {
  return (
    <PriceRateProvider>
      <div className={styles.wrap}>
        { children }
      </div>
    </PriceRateProvider>
  );
};

export default TaskImageWrapper;