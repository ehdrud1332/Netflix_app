import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";



const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = ({movies, tvs, keyword, onChange, onSubmit}) => (
    <Container>
        <Input
            placeholder={"Write a Keyword"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        <HorizontalSlider title={"Movie Results"}>
            {movies.map(movie => (
                <Horizontal/>
            ))}
        </HorizontalSlider>
        <HorizontalSlider title={"TV Results"}>
            {tvs.map(tv => (
                <Horizontal/>
            ))}
        </HorizontalSlider>
    </Container>
);

export default SearchPresenter;
