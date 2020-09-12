import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {gs, colors} from '../../styles';


class Header extends Component {

    render() {
        return (
            <LinearGradient
                colors={[colors.orange, colors.pink]}
                start={[0, 0]}
                end={[1, 1]}
            >
                <View style={{marginHorizontal: 32, paddingVertical: 64}}>
                    <View style={styles.imageContainer}>
                        <View>
                            {/*<View style={styles.check}>*/}
                            {/*    <Entypo*/}
                            {/*        name="plus"*/}
                            {/*        size={24}*/}
                            {/*    />*/}
                            {/*</View>*/}
                            <Image
                                source={require('../../assets/source2png.png')}
                                style={{width: 150, height: 150, borderRadius: 75}}
                            />
                        </View>
                    </View>

                    <View style={[gs.center, {marginVertical: 12}]}>
                        <Text style={gs.title}>
                            JaeMin Seong
                        </Text>
                        <Text style={[gs.subTitle, {marginVertical: 8}]}>Mobile developer</Text>

                        <TouchableOpacity style={styles.follow} onPress={() => alert("clicked follow btn")}>
                            <Text style={styles.followText}>Follow</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </LinearGradient>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    imageContainer: {
        ...gs.center,
        marginTop: 16,
        shadowColor: colors.darkBg,
        shadowOffset: {height: 3, width: 1},
        shadowOpacity: 0.5
    },
    check : {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        shadowColor: colors.darkBg,
        shadowOffset: { height: 3, width: 1},
        shadowOpacity: 0.3,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        bottom: 10

    },
    follow : {
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginTop: 16,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2,
    },
    followText: {
        fontSize: 16,
        color: colors.text,
        fontWeight: "600",
        marginLeft: 4
    }
});
