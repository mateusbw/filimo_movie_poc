import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./TitleItem.scss";

import Imdb from "../../assets/images/imdb.png";

const TitleItem = ({ movie }) => {
  return (
    <div className="title-item">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="title-item__poster"
      />
      <div>
        <div className="title-item__container">
          <NavLink to={`title/${movie.imdbID}`} className="title-item__title">
            {movie.Title}{" "}
            <span className="title-item__year">{`(${movie.Year})`}</span>
          </NavLink>
          <div>
            <span className="title-item__rating">{9.7}</span>
            <img src={Imdb} alt="Imdb" />
          </div>
        </div>
        <p className="title-item__plot">
          A high school chemistry teacher diagnosed with inoperable lung cancer
          turns to manufacturing and selling methamphetamine in order to secure
          his future.
        </p>
      </div>
    </div>
  );
};

TitleItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  }).isRequired,
};

export default TitleItem;
