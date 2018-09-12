import { Constants } from 'expo';

const baseModules = { jokes: 'jokes' };
const baseRoutes = { random: 'random' };

const ENV = {
  dev: {
    env: 'development',
    baseURL: 'http://api.chucknorris.io',
    modules: baseModules,
    routes: baseRoutes,
  },
  staging: {
    env: 'staging',
    baseURL: 'https://api.chucknorris.io',
    modules: baseModules,
    routes: baseRoutes,
  },
  prod: {
    env: 'production',
    baseURL: 'https://api.chucknorris.io',
    modules: baseModules,
    routes: baseRoutes,
  },
};

function getEnvVars(env = '') {
  if (env.indexOf('staging') !== -1) return ENV.staging;
  if (env.indexOf('prod') !== -1) return ENV.prod;
  return ENV.dev;
}

export type ModuleType = $Keys<typeof baseModules>;

export const { routes, modules, baseURL, env } = getEnvVars(
  Constants.manifest.releaseChannel
);
