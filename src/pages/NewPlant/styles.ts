import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    lineHeight: 20,
    color: colors.heading,
    marginTop: 15,
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },

  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingRight: 40,
    marginLeft: 25,
    marginVertical: 30,
  },

  plants: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});
