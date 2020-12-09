export const userSelector = (state) => state.user.data;
export const myWishlist = (state) => state.user.wishlist;
export const isMovieOnWishlist = (movieId) => (state) =>
  !!state.user.wishlist.find((movie) => movie.imdbID === movieId);
