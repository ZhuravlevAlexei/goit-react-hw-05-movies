import { getDataByAxios } from 'sevices/library';

const HomePage = () => {
  getDataByAxios(`/trending/movie/week`).then(resp =>
    console.log('data ', resp.data)
  );
  // const getFilms = await axios.get(
  //   `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  // );
  // return getFilms.data;
  //console.log('data ', data);
  return (
    <div>
      <h3>Trending today</h3>
      {/* <TrendingMoviesList films={films} /> */}
    </div>
  );
};

export default HomePage;
