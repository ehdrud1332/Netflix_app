import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 30px;
  margin-left: 10px;
`;

const Title = ({title}) => <Text>{title}</Text>

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
