import produce from "immer";
import {
  TITLE_IS_LOADING,
  TITLE_REQUEST_ERROR,
  TITLE_REQUEST_SUCCESS,
  TITLE_GET_SUCCESS,
} from "../../types";

const INITIAL_STATE = {
  isLoading: false,
  error: {},
  data: [],
  selectedTitle: {
    Genre: "",
    Awards: "",
  },
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TITLE_IS_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case TITLE_REQUEST_ERROR:
      return produce(state, (draft) => {
        draft.error = action.error;
        draft.data = [];
        draft.isLoading = false;
      });
    case TITLE_REQUEST_SUCCESS:
      return produce(state, (draft) => {
        draft.error = {};
        draft.data = action.data;
        draft.isLoading = false;
      });
    case TITLE_GET_SUCCESS:
      return produce(state, (draft) => {
        draft.error = {};
        draft.selectedTitle = action.data;
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
