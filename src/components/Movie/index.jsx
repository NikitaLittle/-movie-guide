import { useNavigate, useParams } from 'react-router-dom';
import Slider from '../Slider';
import { SwiperSlide } from 'swiper/react';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { getMovie, getSimilarMovies } from '../../api/queries';
import Card from '../Card';
import formatDuration from '../../utils';
import Preloader from '../Preloader';

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function initMovie() {
      const movie = await getMovie(id);

      setMovie(movie);
      setIsLoading(false);
    }

    async function initSimilarMovies() {
      const similarMovies = await getSimilarMovies(id);

      setSimilarMovies(similarMovies);
      setIsLoading(false);
    }

    initMovie();
    initSimilarMovies();
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{movie?.title}</h2>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{movie?.overview}</p>
          <p className={styles.description}>Длительность:{formatDuration(movie?.runtime)}</p>
          <p className={styles.description}>Популярность:{movie?.popularity?.toFixed(2)}</p>
          <p className={styles.description}>Дата выхода:{movie?.release_date}</p>
          <p className={styles.description}>Жанр: {movie?.genres?.map(({ name }) => `${name} `)}</p>
        </div>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        />
      </div>
      <Slider rowsCount={1}>
        {similarMovies.map(({ id, ...similarMovie }) => (
          <SwiperSlide
            key={id}
            tag='li'
            onClick={() => {
              navigate(`/movies/${id}`);
            }}>
            <Card movie={similarMovie} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
}

export default Movie;
