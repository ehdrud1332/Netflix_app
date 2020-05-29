import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {ActivityIndicator, ScrollView, Dimensions} from 'react-native';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import Horizontal from "../../components/Horizontal";
import {trimText} from "../../utils";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window")

const Container = styled.View`
  
`;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;


export default ({loading, nowPlaying, popular, upcoming}) => (
    <ScrollView
        style={{
            backgroundColor: 'black'
        }}
        contentContainerStyle={{
            flex: loading ? 1: "auto",
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
                        <ScrollView
                            style={{marginTop: 20}}
                            contentContainerStyle={{paddingLeft: 30}}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {popular.map(movie => (
                                <Vertical
                                    id={movie.id}
                                    key={movie.id}
                                    votes={movie.vote_average}
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                />
                            ))}
                        </ScrollView>
                        <UpcomingContainer>
                            <Title title={"Coming Soon"} />
                            {upcoming.map(movie => (
                                <Horizontal
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    id={movie.id}
                                    title={movie.original_title}
                                    overview={movie.overview}
                                    releaseDate={movie.release_date}
                                />
                            ))}
                        </UpcomingContainer>
                    </Container>
                </>
            )}

    </ScrollView>

)
