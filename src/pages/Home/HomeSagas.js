import { type Saga } from 'redux-saga';

import { takeEvery, call, put } from 'redux-saga/effects';
import { modules, routes } from '../../config/constants';
import { get } from '../../config/service';
import { success, GET_HOME } from './HomeRedux';
import HomeService from './HomeService';

function* getSaga(): Saga<void> {
  try {
    const result = yield call(get, modules.jokes, routes.random);
    const resultParsed = HomeService.mapApiToValues(result);
    yield put(success(resultParsed));
  } catch (error) {
    // Toast.show({ text: error.userMessage }); @FIXME show error
  }
}

export default [takeEvery(GET_HOME, getSaga)];
