import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 20px;
  width: 100%;

`;

const SearchPresenter = ({ movieResult, tvResult, searchTerm, error, loading, handleSubmit, updateTerm }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder='search movies or Tv...' value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? <Loader /> : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title='Movie Results'>
            {movieResult.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title='TV Results'>
            {tvResult.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.original_name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color={'#e74c3c'} text={error} />}
        {movieResult &&
          tvResult &&
          movieResult.length === 0 &&
          tvResult.length === 0 && (
            <Message color={'#95a5a6'} text={'Nothing Found'} />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.prototype = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
