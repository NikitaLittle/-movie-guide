import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to='/'>
        <h1 className={styles.heading}>Кино справочник</h1>
      </Link>
    </header>
  );
}

export default Header;
