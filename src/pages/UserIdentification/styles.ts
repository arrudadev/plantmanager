import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },

  content: {
    flex: 1,
    width: '100%',
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },

  header: {
    alignItems: 'center',
  },

  emoji: {
    fontSize: 44,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    padding: 10,
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 20,
  },

  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
