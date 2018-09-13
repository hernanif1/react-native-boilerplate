import React from 'react';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import { bindActionCreators as bind, type Dispatch } from 'redux';
import { translate, type TFunction } from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { Container, Button, Text } from './HomeStyles';
import withHeader from '../../commons/hocs/withHeader';
import * as Actions from './HomeRedux';

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
  navigation: NavigationScreenProp<NavigationState>,
  home: HomeType,
  get: typeof Actions.get,
};

export const HomeBase = ({ t, i18n, navigation, home, get }: PropsType) => (
  <Container>
    <Text>{t('common:currentLanguage', { lng: 'language' })}</Text>
    <Text>{t('home:title')}</Text>
    <Text>{t('home:introduction')}</Text>
    <Button
      block
      title={t('common:actions.toggleToEnglish')}
      onPress={() => {
        i18n.changeLanguage('en');
      }}
    />
    <Button
      block
      title={t('common:actions.toggleToPortuguese')}
      onPress={() => {
        i18n.changeLanguage('pt');
      }}
    />
    <Button
      block
      title={t('common:actions.goToPage2')}
      onPress={() => navigation.navigate('NextPage')}
    />
    <Button block onPress={get} title={t('common:actions.fetchData')} />
    <Text>{JSON.stringify(home)}</Text>
  </Container>
);

export default compose(
  translate(['home', 'common']),
  connect(
    state => ({ ...state.home }),
    (dispatch: Dispatch<*>) => bind({ get: Actions.get }, dispatch)
  ),
  withHeader(({ t }: PropsType) => ({
    title: t('home:headerTitle'),
  }))
)(HomeBase);
