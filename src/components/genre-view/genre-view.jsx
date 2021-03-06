import React from 'react';
import Button from 'react-bootstrap/Button';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { MovieCard } from '../movie-card/movie-card';
////////////////////////////////////////////////////////////////////////

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  ////////////////////////////////////////////////////////////////////////

  render() {
    const { movies, genre } = this.props;

    if (!genre) return null;

    //////////////////////////////////////////////////////////////////////////
    return (
      <Container>
        <Card
          className="text-center"
          style={{ border: '1px solid skyblue', marginTop: '30px' }}
        >
          <Card.Title style={{ marginTop: '10px', fontSize: '2em' }}>
            {genre.Genre.Name}
          </Card.Title>
          <Card.Body>{genre.Genre.Description}</Card.Body>
        </Card>
        {movies.map((movie) => {
          if (movie.Genre.Name === genre.Genre.Name) {
            return <MovieCard key={movie._id} movie={movie} />;
          }
        })}
      </Container>
    );
  }
}

GenreView.propTypes = {
  movie: propTypes.shape({
    Genre: propTypes.shape({
      Name: propTypes.string.isRequired,
      Description: propTypes.string.isRequired,
    }),
  }),
};
