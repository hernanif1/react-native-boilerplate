import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import createStore from './src/config/store';
import Navigation from './src/Navigation';
import i18n from './src/config/i18n';
import { themeDark } from './src/themes';

const store = createStore();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ThemeProvider theme={themeDark}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  </I18nextProvider>
);

export default App;
