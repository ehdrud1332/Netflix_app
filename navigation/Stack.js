import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Detail from '../screens/Detail';
import Search from '../screens/Search'
import Tabs from './Tabs';
import Tv from "../screens/Tv";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Tv" component={Tv}/>
    </Stack.Navigator>
);
