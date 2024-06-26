import { Outlet } from 'react-router-dom';
import Header from '../Header';
import styles from './index.module.css';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>{<Outlet />}</main>
    </>
  );
}

export default Layout;
