import axios from 'axios';
import { toast } from 'react-hot-toast';

export async function getDataByAxios(
  ENDPOINT,
  paginationPage = 1,
  searchText = ''
) {
  try {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const MY_THEMOVIEDB_API_KEY = '6dfafd08c001fd3262dc3fe23504fa05';
    let URL = BASE_URL + ENDPOINT + `?api_key=${MY_THEMOVIEDB_API_KEY}`;

    if (searchText) {
      URL = URL + `&query=${searchText.trim()}`;
    }
    if (paginationPage) {
      URL = URL + `&page=${paginationPage}`;
    }
    // console.log('FULL URL: ', URL);
    //alert(URL);
    const resp = await axios.get(URL);
    //toast.success('Success!');
    return resp;
  } catch (error) {
    // console.log('error ', error.message);
    toast.error(error.message);
  }
}

// my themoviedb API keys
//API Key (v3 auth)  6dfafd08c001fd3262dc3fe23504fa05

//Example API Request  https://api.themoviedb.org/3/movie/550?api_key=6dfafd08c001fd3262dc3fe23504fa05

//API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGZhZmQwOGMwMDFmZDMyNjJkYzNmZTIzNTA0ZmEwNSIsInN1YiI6IjY0M2E0OTk1MzEyMzQ1MDRjNGQ4MmNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gg9n2ywUncYKufSDUyoeH5lMDCKTXBfCUwhmMMZYBBk
