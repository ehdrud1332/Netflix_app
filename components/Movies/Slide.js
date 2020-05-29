import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, Image} from 'react-native';
import {apiImage} from "../../api"
import PropTypes from 'prop-types';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen")

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
`;

const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const Votes = styled.Text`
  color: white;
  opacity: 0.7;
`;

const OverView = styled.Text`
  color: white;
  opacity: 0.7;
`;


const Slide = ({id, title, backgroundImg, votes, overview}) => (
    <Container>
        <BG source={{uri : apiImage(backgroundImg)}} />
        <Content>
            <Data>
                <Title>{title}</Title>
                <Votes>{votes} / 10</Votes>
                <OverView>{overview}</OverView>
            </Data>

        </Content>
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