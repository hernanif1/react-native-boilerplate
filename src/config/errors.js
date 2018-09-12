import Sentry from 'sentry-expo';

import i18n from './i18n';

class Error {
  static NOT_FOUND: 'NOT_FOUND';
  static DUPLICATION: 'DUPLICATION';
  static UNKNOWN: 'UNKNOWN';
  static UNAUTHORIZED: 'UNAUTHORIZED';
  static NETWORK_ERROR: 'NETWORK_ERROR';
  static BAD_REQUEST: 'BAD_REQUEST';
  static UNPROCESSABLE_ENTITY: 'UNPROCESSABLE ENTITY';

  static translateError(response: Object) {
    const { status, data, problem } = response;
    const statusError = status || problem;
    switch (statusError) {
      case 401:
        return {
          type: this.UNAUTHORIZED,
          userMessage: i18n.t('errors.unauthorized'),
        };
      case 409:
        return {
          type: this.DUPLICATION,
          userMessage: i18n.t('errors.duplication'),
          data: Array.isArray(data)
            ? data.reduce(
                (parsed, field) => ({
                  ...parsed,
                  [field]: i18n.t('errors.duplication'),
                }),
                {}
              )
            : data,
        };
      case 400:
        return {
          type: this.BAD_REQUEST,
          data,
          userMessage: i18n.t('errors.badRequest'),
        };
      case 404:
        return {
          type: this.NOT_FOUND,
          data,
          userMessage: i18n.t('errors.notFound'),
        };
      case 422:
        return {
          type: this.UNPROCESSABLE_ENTITY,
          data,
          userMessage: i18n.t('errors.unprocessableEntity'),
        };
      case 'NETWORK_ERROR':
        return {
          type: this.NETWORK_ERROR,
          userMessage: i18n.t('errors.networkError'),
        };
      default:
        Sentry.captureException(response);
        return {
          type: this.UNKNOWN,
          data,
          userMessage: i18n.t('errors.unknown'),
        };
    }
  }
}

export default Error;
