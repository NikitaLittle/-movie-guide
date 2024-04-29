import './App.css';
import { Route, Routes } from 'react-router';
import Main from './Main';
import Layout from './Layout';
import Page404 from './Page404';
import Movie from './Movie';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/movies/:id' element={<Movie />} />
      </Route>
      <Route path='/not-found' element={<Page404 />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default App;
