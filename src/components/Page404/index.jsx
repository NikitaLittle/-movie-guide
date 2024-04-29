import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

function Page404() {
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.heading}>404</h1>
          <p className={styles.paragraph}>Страница не найдена</p>
          <button className={styles.button} aria-label='Вернуться назад.' onClick={goBack}>
            Назад
          </button>
        </div>
      </section>
    </main>
  );
}

export default Page404;
