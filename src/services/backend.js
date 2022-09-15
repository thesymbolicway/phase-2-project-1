import axios from 'axios';
import { userDataAPI, userPlaylistAPI } from '../env/beckend';

async function getUserData() {
    const request = await axios(userDataAPI)
    return request.data
}

async function createNewPlaylist(playlist) {
    const request = await axios.post(userPlaylistAPI, playlist)
    return request.data
}

async function getPlaylists() {
    const request = await axios(userPlaylistAPI)
    return request.data
}

async function getPlaylist(id) {
    const request = await axios(`${userPlaylistAPI}/${id}`)
    return request.data
}

async function deletePlaylist(id) {
    const request = await axios.delete(`${userPlaylistAPI}/${id}`)
    return request
}

async function updatePlaylist(id, playlist) {
    const request = await axios.patch(`${userPlaylistAPI}/${id}`, playlist)
    return request
}


export {
    getUserData, 
    createNewPlaylist, 
    getPlaylists, 
    getPlaylist,
    deletePlaylist, 
    updatePlaylist
}