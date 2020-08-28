import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {gs, colors} from '../../styles';

const Location = () => {
    return (
        <View style={styles.container}>
            <View style={{width: 75, height: 75}}>
                <Image
                    source={require('../../assets/source2.png')}
                    style={{flex: 1, width: 35, marginLeft: 25}}
                    resizeMode="center"
                />
            </View>

            <View style={{flex: 1}}>
                <Text style={styles.location}>South Korea</Text>
                <Text style={styles.distance}>350KM</Text>
            </View>
        </View>
    );
};

export default Location;

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        backgroundColor: colors.lightBg,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    location: {
        fontSize: 18,
        color: colors.text,
        fontWeight: "500"
    },
    distance: {
        ...gs.smallText,
        color: colors.darkHl,
        marginTop: 4,
        textTransform: "uppercase"
    }
})
