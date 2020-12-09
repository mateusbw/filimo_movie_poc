import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MovieSeries.scss";

import { Page } from "../../layouts/Page";
import TitleList from "../../components/TitleList/TitleList";
import { titlesSelector } from "../../store/modules/title/titleSelectors";
import { searchTitles } from "../../store/modules/title/titleActions";

export const MoviesSeries = () => {
  const [search, setSearch] = useState("");
  const movies = useSelector(titlesSelector);
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    form.preventDefault();
    dispatch(
      searchTitles({
        s: search,
      })
    );
  };

  const handleOnInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Page>
      <h1 className="heading">Movies & Series</h1>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          className="search-container__input"
          id="search"
          name="search"
          value={search}
          onChange={handleOnInputChange}
        />
        <button type="submit" className="search-container__button">
          Search
        </button>
      </form>
      <TitleList movies={movies} />
    </Page>
  );
};
