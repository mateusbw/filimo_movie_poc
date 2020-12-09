import {
  TITLE_ASYNC_REQUEST,
  TITLE_IS_LOADING,
  TITLE_REQUEST_ERROR,
  TITLE_REQUEST_SUCCESS,
  TITLE_GET_REQUEST,
  TITLE_GET_SUCCESS,
} from "../../types";

export const searchTitles = (data) => ({
  type: TITLE_ASYNC_REQUEST,
  data,
});
export const getTitle = (data) => ({
  type: TITLE_GET_REQUEST,
  data,
});
export const getTitleSuccess = (data) => ({
  type: TITLE_GET_SUCCESS,
  data,
});
export const titlesRequestSucess = (data) => ({
  type: TITLE_REQUEST_SUCCESS,
  data,
});

export const titlesRequestError = (error) => ({
  type: TITLE_REQUEST_ERROR,
  error,
});

export const titlesIsLoading = () => ({
  type: TITLE_IS_LOADING,
});
