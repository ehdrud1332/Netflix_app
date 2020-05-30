import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";
import Vertical from '../../components/Vertical';



const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = ({movies, tvs, keyword, onChange, onSubmit}) => (
    <Container
        contentContainerStyle = {{
            paddingTop:10
        }}
    >
        <Input
            placeholder={"Write a Keyword"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        {movies.length !== 0 && (
            <HorizontalSlider title={"Movie Results"}>
                {movies.map(movie => (
                    <Vertical
                        key={movie.id}
                        votes={movie.vote_average}
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster_path || movie.backdrop_path}
                    />
                ))}
            </HorizontalSlider>
        )}

        {tvs.length !== 0 && (
            <HorizontalSlider title={"TV Results"}>
                {tvs.map(tv => (
                    <Vertical
                        key={tv.id}
                        votes={tv.vote_average}
                        id={tv.id}
                        title={tv.original_name}
                        poster={tv.poster_path || tv.backdrop_path}
                    />
                ))}
            </HorizontalSlider>
        )}
    </Container>
);

export default SearchPresenter;
