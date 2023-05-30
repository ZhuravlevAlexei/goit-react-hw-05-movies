import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDataPage from './pages/MovieDataPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDataPage />} />
        {/* <Route path="cats" element={<Cast />} />
          <Route path="review" element={<Review />} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
