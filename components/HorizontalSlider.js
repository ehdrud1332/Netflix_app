import React from 'react';
import Title from './Title';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';


const HorizontalSlider = ({title, children}) => (
    <View>
        <Title title={title} />
        <ScrollView
            style={{marginTop:-5, marginBottom:0}}
            contentContainerStyle={{paddingLeft: 30}}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </View>
)

HorizontalSlider.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default HorizontalSlider;
