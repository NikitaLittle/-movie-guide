import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import styles from './index.module.css';
import Slider from '../Slider';
import Card from '../Card';
import { getMovies } from '../../api/queries';
import Preloader from '../Preloader';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function initMovies() {
      const movieList = await getMovies();

      setMovieList(movieList);
      setIsLoading(false);
    }

    initMovies();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Лучшие фильмы</h2>
      <Slider rowsCount={2}>
        {movieList.map(({ id, ...movie }) => (
          <SwiperSlide
            key={id}
            tag='li'
            onClick={() => {
              navigate(`/movies/${id}`);
            }}>
            <Card movie={movie} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
}

export default Main;
