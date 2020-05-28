import React, {useState} from 'react';
import {Text, Image} from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';

const cacheImages = images =>
    images.map(image => {
        if(typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

export default function () {

    const [isReady, setIsReady] = useState(false);
    const loadAssets = async() => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ]);
        console.log(images);
    }
    const onFinish = () => setIsReady(true);

    return isReady ? (
        <Text>adsasfd</Text>
    ) : (
        <AppLoading
            startAsync={loadAssets}
            onFinish={onFinish}
            onError={console.log}

        />
    )

}
