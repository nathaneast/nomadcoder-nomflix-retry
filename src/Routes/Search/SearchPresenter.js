import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = (movieResult, tvResult, searchTerm, error, loading, handleSubmit) => null;

SearchPresenter.prototype = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
