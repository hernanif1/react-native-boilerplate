import { create } from 'apisauce';
import type { ApisauceInstance, ApisauceConfig } from 'apisauce';

import { baseURL, modules, type ModuleType } from './constants';

const instance: ApisauceInstance = {};

class API {
  api: ApisauceConfig;
  module: ModuleType;
  token: string;

  constructor(module: ModuleType) {
    this.setModule(module);
    this.init();
  }

  init() {
    this.api = create({
      baseURL: `${baseURL}/${modules[this.module]}/`,
      headers: { Accept: 'application/json' },
    });
  }

  setModule(module: ModuleType) {
    this.module = module;
    instance[module] = this;
    return instance[module];
  }

  setToken(accessToken: string) {
    this.api.setHeader('Authorization', `Bearer ${accessToken}`);
  }
}

export default API;
