import React from 'react';
import styles from './styles.module.css';
import { PricesProvider } from '../../PricesProvider';

const TaskImageWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <PricesProvider>
      <div className={styles.wrap}>{children}</div>
    </PricesProvider>
  );
};

export default TaskImageWrapper;
