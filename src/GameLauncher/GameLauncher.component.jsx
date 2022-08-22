import styles from './GameLauncher.module.css';
import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav.component';

export default function GameLauncher() {
  return (
    <div className={styles.body}>
      <Nav />
      <div className={styles.MainContainer}>
        <Outlet />
      </div>
    </div>
  );
}
