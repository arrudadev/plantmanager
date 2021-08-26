import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },

  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },

  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    lineHeight: 40,
    color: colors.heading,
  },
});
