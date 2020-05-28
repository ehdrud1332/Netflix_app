import React, {useEffect, useState} from 'react';
import {movieApi} from "../../api";
import MoviePresenter from './MoviePresenter';

export default () => {

    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null
    })

    const getDate = async() => {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
        const [upcoming, upcomingError] = await movieApi.upcoming();
        setMovies({
            nowPlaying,
            popular,
            upcoming,
            nowPlayingError,
            popularError,
            upcomingError
        })
    }

    useEffect(() => {
        getDate();
    }, [])

    return(
        <MoviePresenter {...movies} />
    )
};
