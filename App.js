import React, {useState} from 'react';
import {Image, Clipboard} from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import *as Font from 'expo-font';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigation/Stack';

const cacheImages = images =>
    images.map(image => {
      if(typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });

const cacheFonts = fonts =>
    fonts.map(font => [Font.loadAsync(font), FontAwesome.font]);

export default function () {

    if (__DEV__) {
        Clipboard.setString('')
    }

  const [isReady, setIsReady] = useState(false);
  const loadAssets = async() => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
      require("./assets/splash.png")
    ]);
    console.log(images);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  }
  const onFinish = () => setIsReady(true);

  return isReady ? (
    <NavigationContainer>
        <Stack />
    </NavigationContainer>
  ) : (
      <AppLoading
          startAsync={loadAssets}
          onFinish={onFinish}
          onError={console.log}

      />
  )

}
