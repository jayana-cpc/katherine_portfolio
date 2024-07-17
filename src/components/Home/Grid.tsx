// components/Grid.tsx
import React from 'react';
import styles from './Grid.module.css';

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className={styles.grid}>{React.Children.map(children, child => 
    <div className={styles.gridItem}>{child}</div>)}</div>;
};

export default Grid;