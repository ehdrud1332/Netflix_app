import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native';
import {tvApi} from '../../api';
import TvPresenter from "./TvPresenter";

export default () => {
    //초기값, 상태값 선언해주는 곳
    //tv : 초기 상태값, setTv : 다시 설정하는 상태값
    const [tv, setTv] = useState({
        loading: true,
        today: [],
        thisWeek: [],
        topRated: [],
        popular: [],
        todayError: null,
        thisWeekError: null,
        topRatedError: null,
        popularError: null,
    })

    const getData = async() => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        setTv({
            loading: false,
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError
        })
    }
    //라이프 사이클 선언해주는 곳, 무조건 실행되는 곳
    useEffect(() => {
        getData();
    }, [])

    return(
        <View style={{flex:1, backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>
                Today Movie is {tv.today?.length}
            </Text>
        </View>
    )
}
