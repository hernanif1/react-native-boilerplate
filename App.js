import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import createStore from './src/config/store';
import Navigation from './src/Navigation';
import i18n from './src/config/i18n';

const store = createStore();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </I18nextProvider>
);

export default App;
