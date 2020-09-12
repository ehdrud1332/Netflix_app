import React, {useState, useEffect, useLayoutEffect} from 'react';
import * as WebBrowser from 'expo-web-browser';
import DetailPresenter from "./DetailPresenter";
import {movieApi, tvApi} from '../../api';



export default ({
    navigation,
    route: {
        params: {isTv, id, title, backgroundImage, poster, votes, overview}
    }
}) => {

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({
        loading: true,
        result: {
            title,
            backgroundImage,
            poster,
            votes,
            overview,
            videos: {
                results: []
            }
        }
    });
    // const [movie, setMovie] = useState({
    //     title,
    //     backgroundImage,
    //     poster,
    //     overview,
    //     votes
    // });

    const getData = async() => {

        const [getDetail, getDetailError] = isTv
            ? await tvApi.Detail(id)
            : await movieApi.Detail(id)

        // console.log("----------------------", await tvApi.Similar(id))
        setDetail({
            loading: false,
            result: {
                ...getDetail,
                title: getDetail.title || getDetail.name,
                backgroundImage: getDetail.backdrop_path,
                poster: getDetail.poster_path,
                overview: getDetail.overview,
                votes: getDetail.vote_average
            }
        })


        // if (isTv) {
        //     const [getMovie, getMovieError] = await tvApi.Detail(id);
        // } else {
        //     const [getMovie, getMovieError] = await movieApi.Detail(id);
        // }
        // setMovie({
        //     ...getMovie,
        //     title: getMovie.title,
        //     backgroundImage: getMovie.backdrop_path,
        //     poster: getMovie.poster_path,
        //     overview: getMovie.overview,
        //     votes: getMovie.vote_average
        // })
        // console.log(getMovie)

    };

    useEffect(() => {
        getData();
    }, [id]);

    useLayoutEffect(() => {
        navigation.setOptions({title});
    });

    const openBrowser = async url => {
        await WebBrowser.openBrowserAsync(url);
    }

    return(
        <DetailPresenter openBrowser={openBrowser} {...detail}/>
    )
};
