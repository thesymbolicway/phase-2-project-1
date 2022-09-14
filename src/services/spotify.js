import axios from 'axios';
import { getSpotifyAPIToken, clientId, clientSecret } from '../env/spotify'


function getAuthToken() {
    return axios(getSpotifyAPIToken, {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    })
    .then(response => {      
        setToken(response.data.access_token);
  
        axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + response.data.access_token}
        })
        .then (genreResponse => {      
          console.log('genre response: ', genreResponse);  
          setSelectedGenre(selectedGenre)
          setListOfGenres(genreResponse.data.categories.items)
        });
}