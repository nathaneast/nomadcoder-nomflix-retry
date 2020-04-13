import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomePresenter = (result, error, loading) => null;

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
