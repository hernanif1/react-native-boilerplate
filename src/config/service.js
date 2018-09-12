import { type ModuleType } from './constants';
import Error from './errors';
import API from './api';

const APIData = (module: ModuleType) => new API(module);

const preparePromise = (
  call: Promise<*>,
  resolve: Function,
  reject: Function
): Promise<*> =>
  call.then(response => {
    if (!response.ok) {
      const error = Error.translateError(response);
      reject(error);
    } else {
      resolve(response.data);
    }
  });

export const get = (
  module: ModuleType,
  data: string,
  params?: Object = {}
): Promise<any> =>
  new Promise((resolve, reject) =>
    preparePromise(APIData(module).api.get(data, params), resolve, reject)
  );

export const post = (
  module: ModuleType,
  data: string,
  params?: Object = {}
): Promise<any> =>
  new Promise((resolve, reject) =>
    preparePromise(APIData(module).api.post(data, params), resolve, reject)
  );

export const put = (
  module: ModuleType,
  data: string,
  params?: Object = {}
): Promise<any> =>
  new Promise((resolve, reject) =>
    preparePromise(APIData(module).api.put(data, params), resolve, reject)
  );

export const patch = (
  module: ModuleType,
  data: string,
  params?: Object = {}
): Promise<any> =>
  new Promise((resolve, reject) =>
    preparePromise(APIData(module).api.patch(data, params), resolve, reject)
  );

export const del = (
  module: ModuleType,
  data: string,
  id: string
): Promise<any> =>
  new Promise((resolve, reject) =>
    preparePromise(APIData(module).api.delete(`${data}/${id}`), resolve, reject)
  );
