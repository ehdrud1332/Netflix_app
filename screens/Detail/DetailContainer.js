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
            },
            similar: [],
            keyword: {
                keywords: []
            }

        }
    });


    const getData = async() => {

        const [getDetail, getDetailError] = isTv
            ? await tvApi.Detail(id)
            : await movieApi.Detail(id)

        const [similar, similarError] = isTv
            ? await tvApi.Similar(id)
            : await movieApi.Similar(id)

        const [keyword, keywordError] = isTv
            ? await tvApi.Keywords(id)
            : await movieApi.Keywords(id)

        setDetail({
            loading: false,
            result: {
                ...getDetail,
                title: getDetail.title || getDetail.name,
                backgroundImage: getDetail.backdrop_path,
                poster: getDetail.poster_path,
                overview: getDetail.overview,
                votes: getDetail.vote_average,
                similar: similar,
                keyword: keyword.keywords
            }
        })

        console.log("++++++++++++++++++++", similar.length)
        console.log("-----------", keyword.keywords.length)


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
