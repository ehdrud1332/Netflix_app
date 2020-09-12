import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: "black",
                borderBottomColor: "black",
                shadowColor: "black"
            },
            // headerTintColor : Header 색
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false
        }}
    >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);
