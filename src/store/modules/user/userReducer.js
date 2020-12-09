import produce from "immer";
import { ADD_MOVIE_WISHLIST, REMOVE_MOVIE_WISHLIST } from "../../types";

const INITIAL_STATE = {
  data: {
    name: "John Doe",
    profilePicUrl: "https://picsum.photos/300",
  },
  wishlist: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MOVIE_WISHLIST:
      return produce(state, (draft) => {
        draft.wishlist.push(action.movie);
      });
    case REMOVE_MOVIE_WISHLIST:
      return produce(state, (draft) => {
        draft.wishlist = draft.wishlist.filter(
          (movie) => movie.imdbID !== action.movieId
        );
      });
    default:
      return state;
  }
}
