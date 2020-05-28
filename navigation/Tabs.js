import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Like from '../screens/Like';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();

export default () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Tv" component={Tv} />
        <Tabs.Screen name="Like" component={Like} />
        <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
);
