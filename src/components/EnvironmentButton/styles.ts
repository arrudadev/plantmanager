import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 76,
    height: 40,
    backgroundColor: colors.shape,
    borderRadius: 12,
    marginHorizontal: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
