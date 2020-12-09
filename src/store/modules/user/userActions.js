import { ADD_MOVIE_WISHLIST, REMOVE_MOVIE_WISHLIST } from "../../types";

export const addToWishlist = (movie) => ({
  type: ADD_MOVIE_WISHLIST,
  movie,
});
export const removeFromWishlist = (movieId) => ({
  type: REMOVE_MOVIE_WISHLIST,
  movieId,
});
