import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {ScrollView, Dimensions} from 'react-native';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import Horizontal from "../../components/Horizontal";
import {trimText} from "../../utils";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

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

    <ScrollContainer loading={loading}>
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
                <HorizontalSlider title={"Popular Movie"} >
                    {popular.map(movie => (
                        <Vertical
                            id={movie.id}
                            key={movie.id}
                            votes={movie.vote_average}
                            poster={movie.poster_path}
                            title={movie.original_title}
                        />
                    ))}
                </HorizontalSlider>
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
    </ScrollContainer>

)
