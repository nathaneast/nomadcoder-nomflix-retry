import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from '../../Components/Message';

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
    { loading ? <Loader /> : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title='Movie Results'>
            {movieResult.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title='TV Results'>
            {tvResult.map(tv => (
              <span key={tv.id}>{tv.name}</span>
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
