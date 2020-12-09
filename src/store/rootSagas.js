import { all } from "redux-saga/effects";

import titles from "./modules/title/titleSaga";

export default function* root() {
  yield all([...titles]);
}
