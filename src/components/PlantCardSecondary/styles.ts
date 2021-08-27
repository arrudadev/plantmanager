import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.shape,
  },

  title: {
    flex: 1,
    fontFamily: fonts.heading,
    fontSize: 17,
    marginLeft: 10,
    color: colors.heading,
  },

  details: {
    alignItems: 'flex-end',
  },

  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },

  time: {
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
    marginTop: 5,
  },

  buttonRemove: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    paddingLeft: 15,
    borderRadius: 20,
    position: 'relative',
    right: 20,
  },
});
