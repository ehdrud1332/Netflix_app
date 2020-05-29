import React from 'react';
import styled from 'styled-components/native';
import {apiImage} from "../../api"
import PropTypes from 'prop-types';
import Poster from '../Poster'
import {TouchableOpacity} from 'react-native';
import Votes from '../votes';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const VotesContainer = styled.Text`
  margin-bottom: 7px;
`;

const OverView = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 12px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-bottom: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`


const Slide = ({id, title, backgroundImg, votes, overview, poster}) => (
    <Container>
        <BG source={{uri : apiImage(backgroundImg)}} />
        <Content>
            <Poster url={apiImage(poster)} />
            <Data>
                <Title>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</Title>
                <VotesContainer>
                    <Votes votes={votes} />
                </VotesContainer>
                <OverView>{overview.slice(0,110)}...</OverView>
                <TouchableOpacity>
                    <Button>
                        <ButtonText>View Details</ButtonText>
                    </Button>
                </TouchableOpacity>
            </Data>

        </Content>
    </Container>
);

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Slide;
