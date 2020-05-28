import React, {useEffect, useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Like from '../screens/Like';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Tv" component={Tv}/>
            <Tabs.Screen name="Like" component={Like}/>
            <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator>

    )


};
