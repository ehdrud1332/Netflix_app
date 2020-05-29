import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, Image} from 'react-native';
import {apiImage} from "../../api"
import PropTypes from 'prop-types';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen")

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 3}px;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
`;


const Slide = ({id, title, backgroundImg, votes, overview}) => (
    <Container>
        <BG source={{uri : apiImage(backgroundImg)}} />
    </Container>
);

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default Slide;
