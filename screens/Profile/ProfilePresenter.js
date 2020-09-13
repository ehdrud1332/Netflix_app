import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {colors, gs} from '../../styles';


import About from "../../components/Profile/About";
import Header from "../../components/Profile/Header";
import Stats from "../../components/Profile/stats";
import Location from "../../components/Profile/location";
import Movies from '../../components/Profile/Movies';


const ProfilePresenter = () => (

        <ScrollView
            style={{backgroundColor: 'black'}}
        >
            <Header />
            <Stats />
            <About />
            <Location />
            <Movies />
        </ScrollView>

    );


export default ProfilePresenter;
