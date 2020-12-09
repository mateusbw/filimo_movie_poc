import React from "react";
import PropTypes from "prop-types";
import "./TitleList.scss";

import TitleItem from "../TitleItem/TitleItem";

const TitleList = ({ movies }) => {
  const renderList = () =>
    movies.map((m) => (
      <li key={m.imdbID} className="title-list__item">
        <TitleItem movie={m} />
      </li>
    ));
  return movies && movies.length > 0 ? (
    <ul className="title-list">{renderList()}</ul>
  ) : (
    <></>
  );
};

TitleList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string,
      Type: PropTypes.string,
      Poster: PropTypes.string,
    })
  ).isRequired,
};

export default TitleList;
