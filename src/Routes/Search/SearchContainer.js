import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from 'api';

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: '',
    error: null,
    loading: false
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm(searchTerm);
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({
        loading: true
      });
      const { data: { results: movieResult } } = await moviesApi.search(searchTerm);
      const { data: { results: tvResult } } = await tvApi.search(searchTerm);
      this.setState({
        movieResult,
        tvResult
      });
    } catch {
      this.setState({
        error: 'cant find results'
      });
    } finally {
      this.setState({
        loading: false
      })
    }
  };

  render() {
    const { movieResult, tvResult, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
