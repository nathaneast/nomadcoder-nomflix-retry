import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`

`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title='Now Playing'>
            {topRated.map(tv => tv.name)}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title='popular TV'>
            {popular.map(tv => tv.name)}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title='airingToday'>
            {airingToday.map(tv => tv.name)}
          </Section>
        )}
      </Container>
    );

TVPresenter.prototype = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
