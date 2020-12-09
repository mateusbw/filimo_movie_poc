import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Page } from "../../layouts/Page";

import Imdb from "../../assets/images/imdb.png";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

import "./Title.scss";
import { getTitle } from "../../store/modules/title/titleActions";
import { titleSelected } from "../../store/modules/title/titleSelectors";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/modules/user/userActions";
import { isMovieOnWishlist } from "../../store/modules/user/userSelectors";

const Title = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getTitle({
        i: id,
      })
    );
  }, [dispatch]);

  const movie = useSelector(titleSelected);
  const isOnWishlist = useSelector(isMovieOnWishlist(movie.imdbID));
  const genres = () => movie.Genre.split(", ");
  const renderGenresPill = () => {
    return genres().map((genre) => (
      <div className="title__genre-pill">{genre}</div>
    ));
  };

  const awards = () => (movie.Awards !== "N/A" ? movie.Awards.split(".") : []);
  const renderAwards = () =>
    awards().length > 0 && (
      <span className="title__awards">
        {awards().map((award, index) =>
          awards().length > 1 && index === 0 ? (
            <strong>{award}.</strong>
          ) : (
            `${award}.`
          )
        )}
      </span>
    );

  const comments = [
    {
      userName: "bruhperson",
      profilePic: "https://picsum.photos/400",
      comment: "Re-Watched it 7 times and counting. I guess I liked it.",
      rate: "10",
      date: "12 Oct 2019",
    },
  ];

  const renderComments = () =>
    comments.map((c) => (
      <div className="title__comments-sections__comments__comment">
        <div className="title__comments-sections__comments__comment__right">
          <div className="title__comments-sections__comments__comment__profile">
            <img
              src={c.profilePic}
              alt="Profile Pic"
              className="title__comments-sections__comments__comment__profile-pic"
            />
            <span className="title__comments-sections__comments__comment__username">
              {c.userName}
            </span>
          </div>
          <span className="title__comments-sections__comments__comment__text">
            {c.comment}
          </span>
        </div>
        <div className="title__comments-sections__comments__comment__left">
          <span className="title__comments-sections__comments__comment__rate">
            {c.rate}/10
          </span>
          <span className="title__comments-sections__comments__comment__date">
            {c.date}
          </span>
        </div>
      </div>
    ));

  const handleAWishlist = () => {
    if (isOnWishlist) {
      dispatch(removeFromWishlist(movie.imdbID));
    } else {
      dispatch(addToWishlist(movie));
    }
  };

  return (
    <div className="title">
      <div
        className="title__banner"
        style={{ backgroundImage: `url(${movie.Poster})` }}
      />
      <Page>
        <div className="title__banner-content">
          <img
            src={movie.Poster}
            alt="Movie Poster"
            className="title__movie-poster"
          />
          <div>
            <h1 className="title__title">
              {movie.Title}{" "}
              <span className="title__year">{`(${movie.Year})`}</span>
            </h1>
            <span className="title__paragraph">{movie.Type}</span>
            <span className="title__rating">
              {movie.imdbRating} <img src={Imdb} alt="Imdb" />
            </span>
            <span className="title__paragraph">
              {movie.Runtime} - {movie.Country}
            </span>
            <div className="title__genres-container">{renderGenresPill()}</div>
            <span className="title__paragraph">{movie.Plot}</span>
          </div>
        </div>
        <div className="title__actions">
          <button
            type="button"
            className={`button button--icon ${
              isOnWishlist
                ? "button--yellow button--remove"
                : "button--white-transparent button--add"
            }`}
            onClick={handleAWishlist}
          >
            {isOnWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            <div className="icon">
              <HeartIcon />
            </div>
          </button>
          <div type="button" className="pill">
            Your Rate
          </div>
        </div>
        {renderAwards()}
        <h2 className="heading--small">About</h2>
        <div className="title__about">
          <div className="title__about__container">
            <p className="title__about__label">Summary:</p>
            <p className="title__about__info">{movie.Plot}</p>
          </div>
          <div className="title__about__container">
            <p className="title__about__label">Director(s):</p>
            <p className="title__about__info">{movie.Director}</p>
          </div>
          <div className="title__about__container">
            <p className="title__about__label">Cast:</p>
            <p className="title__about__info">{movie.Actors}</p>
          </div>
        </div>
        <h2 className="heading--small">Comments</h2>
        <div className="title__comments-sections">
          <form className="title__comments-sections__form">
            <textarea
              rows="8"
              placeholder="Write your review here..."
              className="input"
            />
            <button className="button--yellow" type="submit">
              Submit
            </button>
          </form>
          <div className="title__comments-sections__comments">
            {renderComments()}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Title;
