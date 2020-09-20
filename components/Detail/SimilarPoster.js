import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Poster from '../Poster';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Container = styled.View`
  align-items: center;
  margin-right: 10px;
`;



const SimilarPoster = ({isTv=false, id, poster}) => {

    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            id,
            poster,
        })
    }

    return(

        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
            </Container>
        </TouchableOpacity>


    )
}





SimilarPoster.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
};

export default SimilarPoster;
