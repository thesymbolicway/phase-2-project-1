import axios from 'axios';
import { 
    getSpotifyAPIToken, 
    getSpotifyGenres, 
    clientId, 
    clientSecret, 
    getSpotifyPlaylists,
    getSpotifyTracksInPlaylist
} from '../env/spotify'


async function getAuthToken() {
    const request = await axios(getSpotifyAPIToken, {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })

      return request.data.access_token;
}

async function getGenres(accessToken) {
    const request = await axios(getSpotifyGenres, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + accessToken}
    })

    return request.data.categories.items;
}

async function getPlaylists(genreId, token) {
    const request = await axios(getSpotifyPlaylists(genreId), {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    })

    return request.data.playlists.items;
}

async function getPlaylistData(playlistId, token) {
    const request = await axios(getSpotifyTracksInPlaylist(playlistId), {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    })

    return request.data.items;
}

export {getAuthToken, getGenres, getPlaylists, getPlaylistData}