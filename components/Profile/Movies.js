import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {gs, colors} from '../../styles';

const photos = [
    require('../../assets/hotel.jpg'),
    require('../../assets/hotel3.jpg'),
    require('../../assets/hotel2.jpeg'),
    require('../../assets/hotel2.jpeg'),
    require('../../assets/hotel.jpg'),
    require('../../assets/hotel3.jpg'),
    require('../../assets/hotel.jpg'),
    require('../../assets/hotel3.jpg'),
    require('../../assets/hotel2.jpeg'),
];

const Movies = () => {
    return (
        <View style={[gs.sectionContainer, {marginTop: 8}]}>
            <Text style={gs.sectionTitle}>My favorite movies</Text>
            <View style={styles.photosContainer}>
                {photos.map((photo, index) => {
                    return(
                        <Image
                            source={photo}
                            key={index}
                            style={[styles.photo, {
                                marginRight: (index + 1) % 3 === 0 ? 0 : 12
                            }]}
                        />
                    )
                })}
            </View>
        </View>
    );
};

export default Movies;

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    },
    photo: {
        width: 108,
        height: 108,
        marginBottom: 12,
        borderRadius: 5
    }

})
