import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';

const App = () => {
  return (
    <Routes>
      <Route parh="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesPageDetails />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
