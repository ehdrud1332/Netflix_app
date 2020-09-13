import React from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import Horizontal from '../../components/Horizontal';
import styled from 'styled-components/native';
import List from '../../components/List';

import {StatusBar} from 'react-native';

const Container = styled.View`
  margin-top: 40px;
`;

const TvPresenter = ({refreshFn, loading, popular, topRated, today}) => (

    <ScrollContainer loading={loading}>
        <StatusBar barStyle="light-content"/>
        <Container/>
        <HorizontalSlider title={"Popular Show"}>
            {popular.map(tv => (
                <Vertical
                    isTv={true}
                    key={tv.id}
                    votes={tv.vote_average}
                    poster={tv.poster_path}
                    id={tv.id}
                    title={tv.original_name}
                />
            ))}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated"}>
            {topRated.map(tv => (
                <Vertical
                    isTv={true}
                    key={tv.id}
                    votes={tv.vote_average}
                    poster={tv.poster_path}
                    id={tv.id}
                    title={tv.original_name}
                />
            ))}
        </HorizontalSlider>
        <List title={"Aring Today"}>
            {today.map(tv => (
                <Horizontal
                    isTv={true}
                    key={tv.id}
                    poster={tv.poster_path}
                    id={tv.id}
                    title={tv.original_name}
                    overview={tv.overview}
                />
            ))}
        </List>
    </ScrollContainer>


)

export default TvPresenter;
