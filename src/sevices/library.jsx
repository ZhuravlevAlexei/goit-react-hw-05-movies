import axios from 'axios';

export async function getDataByAxios(PARAMETERS) {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const MY_THEMOVIEDB_API_KEY = '6dfafd08c001fd3262dc3fe23504fa05';
  const URL = BASE_URL + PARAMETERS + `?api_key=${MY_THEMOVIEDB_API_KEY}`;

  console.log('URL ', URL);
  const resp = await axios.get(URL);
  return resp;
}

// my themoviedb API keys
//API Key (v3 auth)  6dfafd08c001fd3262dc3fe23504fa05

//Example API Request  https://api.themoviedb.org/3/movie/550?api_key=6dfafd08c001fd3262dc3fe23504fa05

//API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGZhZmQwOGMwMDFmZDMyNjJkYzNmZTIzNTA0ZmEwNSIsInN1YiI6IjY0M2E0OTk1MzEyMzQ1MDRjNGQ4MmNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gg9n2ywUncYKufSDUyoeH5lMDCKTXBfCUwhmMMZYBBk
