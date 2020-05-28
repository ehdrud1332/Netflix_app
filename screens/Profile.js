import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({navigation}) => (
    <View>
        <Text>Profile</Text>
        <Button
            onClick={() => navigation.navigate("Detail")}
            title="Go to Detail"
        />
    </View>
)
