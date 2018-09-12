import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { type NavigationScreenProp } from 'react-navigation';
import { translate, type TFunction } from 'react-i18next';
import { compose } from 'recompose';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type PropsType = {
  t: TFunction,
  i18n: Object,
  navigation: NavigationScreenProp<{}>,
};

const Details = ({ t, navigation }: PropsType) => (
  <View style={styles.container}>
    <Text>{t('page2:title')}</Text>
    <Text>{t('page2:introduction')}</Text>
    <Button
      onPress={() => navigation.navigate('LaunchScreen')}
      title={t('common:actions.goToPageLaunchScreen')}
    />
  </View>
);
export default compose(translate(['page2', 'common']))(Details);
