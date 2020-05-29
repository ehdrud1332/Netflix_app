import React from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import Horizontal from '../../components/Horizontal';
import styled from 'styled-components/native';
import List from '../../components/List';

const Container = styled.View`
  margin-top: 30px;
`;

const TvPresenter = ({loading, popular, topRated, today}) => (

    <ScrollContainer loading={loading}>
        <HorizontalSlider title={"Popular Show"}>
            {popular.map(tv => (
                <Vertical
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
