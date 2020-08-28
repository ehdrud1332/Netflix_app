import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, gs} from '../../styles';
import {Ionicons} from '@expo/vector-icons';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>
                안녕하세요 성재민입니다. 지금 코딩공부를 스타벅스에서 하고 있어요. 취직하고 싶어요
            </Text>

        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    about: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22
    }
})
