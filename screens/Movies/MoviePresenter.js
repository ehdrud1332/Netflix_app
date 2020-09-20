import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {Dimensions} from 'react-native';
import Slide from '../../components/Movies/Slide';
import Vertical from '../../components/Vertical';
import Horizontal from "../../components/Horizontal";
import {trimText} from "../../utils";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from '../../components/List';
;
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window")

const Container = styled.View`
  
`;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;


export default ({refreshFn, loading, nowPlaying, popular, upcoming}) => {


    return(

        <ScrollContainer refreshFn={refreshFn} loading={loading}>
            <>
                <SliderContainer>
                    <Swiper controlsEnabled={false} loop timeout={4}>
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
                    <List title={"Coming Soon"}>
                        {upcoming.map(movie => (
                            <Horizontal
                                key={movie.id}
                                poster={movie.poster_path}
                                id={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                releaseDate={movie.release_date}
                            />
                        ))}
                    </List>
                </Container>
            </>
        </ScrollContainer>
    )

}
