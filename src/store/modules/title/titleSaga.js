import { takeLatest, put } from "redux-saga/effects";
import { searchTitles } from "../../../services/titleService";
import { TITLE_ASYNC_REQUEST, TITLE_GET_REQUEST } from "../../types";
import {
  titlesIsLoading,
  titlesRequestError,
  titlesRequestSucess,
  getTitleSuccess,
} from "./titleActions";

function* searchTitlesSaga({ data }) {
  yield put(titlesIsLoading());
  try {
    const response = yield searchTitles({ params: data });
    yield put(titlesRequestSucess(response.Search));
  } catch (err) {
    yield put(titlesRequestError(err));
  }
}

function* getTitleSaga({ data }) {
  yield put(titlesIsLoading());
  try {
    const response = yield searchTitles({ params: data });
    yield put(getTitleSuccess(response));
  } catch (err) {
    yield put(titlesRequestError(err));
  }
}

const titleSagas = [
  takeLatest(TITLE_ASYNC_REQUEST, searchTitlesSaga),
  takeLatest(TITLE_GET_REQUEST, getTitleSaga),
];
export default titleSagas;
