import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title='nowPlaying'>
            {nowPlaying.map(movie => (
            <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title='upcoming'>
            {upcoming.map(movie => (
            <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title='nowPlaying'>
            {nowPlaying.map(movie => (
            <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {error && <Message color={'#e74c3c'} text={error} />}
      </Container>
    );


HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
