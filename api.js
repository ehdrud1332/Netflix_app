import axios from 'axios';

const TMDB_KEY = "c1d76ca84cd92ecf70d3ef7766e55d7c"

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    });

const getAnything = async(path, params = {}) => {
    try{
        const {
            data: {results},
            data
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch (e) {
        return [null, e];
    }
};

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming")
};

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
}
