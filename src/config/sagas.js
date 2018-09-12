import { all } from 'redux-saga/effects';
import Home from '../pages/Home/HomeSagas';

export default function* sagas(): any {
  yield all([...Home]);
}
