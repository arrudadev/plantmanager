import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  containerNoData: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 30,
  },

  wrapperNoData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noDataEmoji: {
    height: 300,
    width: 300,
  },

  noDataText: {
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.heading,
    width: 200,
  },

  registerPlant: {
    marginTop: 10,
    width: '80%',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    backgroundColor: colors.background,
  },

  spotlight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 110,
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  spotlightImage: {
    width: 60,
    height: 60,
  },

  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
  },

  plants: {
    flex: 1,
    width: '100%',
  },

  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
});
