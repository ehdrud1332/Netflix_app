import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Like from '../screens/Like';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import Profile from '../screens/Profile';
import {Platform} from 'react-native';

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
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === 'ios' ? "ios-" : "md-"
                    if (route.name === "Movies") {
                        iconName += "film";
                    } else if (route.name === "Tv") {
                        iconName += "tv";
                    } else if (route.name === "Search") {
                        iconName += "search";
                    } else if (route.name === "Profile") {
                        iconName += "person"
                    } else if (route.name === "Like") {
                        iconName += "heart"
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused ? "white" : "grey"}
                            size={26}
                        />
                    )
                }
            })}
            tabBarOptions={{
                // bottom tab의 icon 아래 보이는 이름 보이게 or 안보이게
                showLabel: true,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}
        >
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Tv" component={Tv}/>
            <Tabs.Screen name="Like" component={Like}/>
            <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator>

    )


};
