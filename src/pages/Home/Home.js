import React from 'react';
import { bindActionCreators as bind, type Dispatch } from 'redux';
import { type NavigationScreenProp } from 'react-navigation';
import { translate, type TFunction } from 'react-i18next';
import { StyleSheet, Button, Text, View } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import * as Actions from './HomeRedux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mb10: {
    marginBottom: 10,
  },
});

export type HomeType = {
  category: string,
  icon_url: string,
  id: string,
  url: string,
  value: string,
};

type PropsType = {
  t: TFunction,
  i18n: Object,
  navigation: NavigationScreenProp<{}>,
  home: HomeType,
  get: typeof Actions.get,
};

export const HomeBase = ({ t, i18n, navigation, home, get }: PropsType) => (
  <View style={styles.container}>
    <Text>{t('common:currentLanguage', { lng: 'language' })}</Text>
    <Text>{t('home:title')}</Text>
    <Text style={styles.mb10}>{t('home:introduction')}</Text>
    <Button
      block
      style={styles.mb10}
      title={t('common:actions.toggleToEnglish')}
      onPress={() => {
        i18n.changeLanguage('en');
      }}
    />
    <Button
      block
      style={styles.mb10}
      title={t('common:actions.toggleToPortuguese')}
      onPress={() => {
        i18n.changeLanguage('pt');
      }}
    />
    <Button
      block
      style={styles.mb10}
      title={t('common:actions.goToPage2')}
      onPress={() => navigation.navigate('NextPage')}
    />
    <Button
      block
      style={styles.mb10}
      onPress={get}
      title={t('common:actions.fetchData')}
    />
    <Text>{JSON.stringify(home)}</Text>
  </View>
);

export default compose(
  translate(['home', 'common']),
  connect(
    state => ({ ...state.home }),
    (dispatch: Dispatch<*>) => bind({ get: Actions.get }, dispatch)
  )
)(HomeBase);
