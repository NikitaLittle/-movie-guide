import styles from './index.module.css';

function Card({ movie }) {
  const { poster_path, vote_average, title } = movie;

  return (
    <>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <div className={styles.container}>
        <p className={styles.voteAverage}>{vote_average.toFixed(1)}</p>
        <h2 className={styles.heading}>{title}</h2>
      </div>
    </>
  );
}

export default Card;
