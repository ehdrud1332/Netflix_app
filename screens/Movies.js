import React, {useEffect, useState} from 'react';
import { View, Text, Button} from 'react-native';
import {movieApi} from "../api";

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
        <View style={{flex:1, backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>
                {movies.nowPlaying?.length}
            </Text>
            <Text style={{color: 'white'}}>
                popular Data is {movies.popular?.length}
            </Text>
        </View>
    )
};
