import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import ScrollView from '../components/ScrollContainer';
import {apiImage} from "../api";
import {Dimensions} from 'react-native';
import Poster from '../components/Poster';
import Votes from '../components/votes';
import ScrollContainer from "../components/ScrollContainer";

const BG = styled.Image`
  width: 100%;
  height: ${Dimensions.get("window").height / 3}px;
  opacity: 0.4;
  position: absolute;
`;


const Header = styled.View`
  
`;

const Container = styled.View`

`;

const Title = styled.Text`

`;

const Info = styled.View`

`;


export default ({
    navigation,
    route: {
        params: {id, title, backgroundImage, poster, votes}
    }
}) => {
    navigation.setOptions({title})

    return (
        <ScrollContainer loading={false}>
            <Header>
                <BG source={{uri: apiImage(backgroundImage, "-")}} />
                <Container>
                    <Poster url={poster} />
                    <Info>
                        <Title>{title}</Title>
                        <Votes votes={votes} />
                    </Info>
                </Container>
            </Header>
        </ScrollContainer>
    )
}
