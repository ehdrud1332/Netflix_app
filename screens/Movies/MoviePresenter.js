import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {ActivityIndicator, Text} from 'react-native';
import Slide from '../../components/Movies/Slide';



const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;


export default ({loading, nowPlaying}) => (
    <Container>
        {loading ? (
            <ActivityIndicator color='white' size="large" />
        ) : (
            <>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map(movie => (
                       <Slide
                           key={movie.id}
                           votes={movie.vote_average}
                           overview={movie.overview}
                           backgroundImg={movie.backdrop_path}
                           id={movie.id}
                           title={movie.title}
                        />
                    ))}
                </Swiper>
            </>
        )}

    </Container>

)
