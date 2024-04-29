import instance from '.';

async function getMovies() {
  try {
    const res = await instance.get('/movie/top_rated?language=ru&page=1');
    return res?.data?.results;
  } catch (err) {
    window.location.replace('/not-found');
  }
}

async function getMovie(id) {
  try {
    const res = await instance.get(`/movie/${id}?language=ru`);
    return res?.data;
  } catch (err) {
    window.location.replace('/not-found');
  }
}

async function getSimilarMovies(id) {
  try {
    const res = await instance.get(`/movie/${id}/similar?language=ru`);
    return res?.data?.results;
  } catch (err) {
    console.log(err);
  }
}

export { getMovies, getMovie, getSimilarMovies };
