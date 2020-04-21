import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { Helmet } from "react-helmet";

import Message from '../../Components/Message';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const IMDBButton = styled.div`
  background-color: #f1c40f;
  font-weight: 500;
  padding: 3px;
  border-radius: 3px;
  color: #2c3e50;
`;

const IMDBLink = styled.a``;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const MoreInfo = styled.div``;

const VideosTab = styled.div``;

const ProductionTab = styled.div``;

const CountriesTab = styled.div``;


const DetailPresenter = ({ result, error, loading, isMovie }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
      error ? <Message color={'#e74c3c'} text={error} /> : (
        <Container>
          <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name}{' '} | nomflix</title>
          </Helmet>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require('../../assets/no_poster_Img.png')
              }
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name
                }
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)
                  }
                </Item>
                <Divider>▪</Divider>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time[0]} min
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
                <Divider>•</Divider>
                <IMDBButton>
                  <IMDBLink target='_blank' href={isMovie ? (
                    `https://www.imdb.com/title/${result.imdb_id}/`
                  ) : (
                      `https://www.imdb.com/title/${result.external_ids.imdb_id}/`
                    )} >
                    <Item>IMDB</Item>
                  </IMDBLink>
                </IMDBButton>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              {/* <MoreInfo>
                <VideosTab>
                  {result.videos.results.map(video => {
                    return (
                      <iframe title='video' key={video.id} width="200" height="200" src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      </iframe>
                    )
                  })}
                </VideosTab>
              </MoreInfo> */}
            </Data>
          </Content>
        </Container>
      ));

DetailPresenter.prototype = {
  nowPlaying: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
