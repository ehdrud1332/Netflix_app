import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
// import styled from 'styled-components/native';
import {theme} from '../constants';
import {Text, Block} from '../components';

// const Text = styled.Text`
//   color: white;
//   font-weight: bold;
//   font-size: 19px;
//   margin-bottom: 30px;
//   margin-left: 10px;
// `;

const Title = ({title}) =>
    <Block marginBottom={20} marginLeft={10}>
        <Text bold style={styles.title}>
            {title}
        </Text>
    </Block>


Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;

const styles = StyleSheet.create({
    title: {
        color: theme.colors.white,
        fontSize: theme.sizes.title,

    }
})
