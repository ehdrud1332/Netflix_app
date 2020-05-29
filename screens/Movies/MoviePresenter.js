import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {ActivityIndicator, ScrollView, Dimensions} from 'react-native';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window")

const Container = styled.View`

`;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;


export default ({loading, nowPlaying, popular}) => (
    <ScrollView
        style={{
            backgroundColor: 'black'
        }}
        contentContainerStyle={{
            flex:1,
            justifyContent: loading ? "center" : "flex-start"
        }}
    >
            {loading ? (
                <ActivityIndicator color='white' size="large" />
            ) : (
                <>
                    <SliderContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map(movie => (
                               <Slide
                                   key={movie.id}
                                   votes={movie.vote_average}
                                   overview={movie.overview}
                                   backgroundImg={movie.backdrop_path}
                                   id={movie.id}
                                   title={movie.title}
                                   poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SliderContainer>
                    <Container>
                        <Title title={"Popular Movies"} />
                        <ScrollView horizontal>
                            {popular.map(movie => (
                                <Vertical
                                    key={movie.id}
                                    votes={movie.vote_average}
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                />
                            ))}
                        </ScrollView>
                    </Container>
                </>
            )}

    </ScrollView>

)
