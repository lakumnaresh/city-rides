import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../utils/constants';

export const globalStyles = StyleSheet.create({
  rootView:{
    flex:1,
    backgroundColor: COLORS.gray[50],
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.gray[50],
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.margin,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: COLORS.gray[100],
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: SIZES.padding,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: SIZES.title,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: COLORS.primaryLight,
    fontSize: SIZES.caption,
  },
  screenTitle: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.gray[900],
    marginBottom: SIZES.margin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textMedium: {
    fontWeight: '500',
  },
  textGray: {
    color: COLORS.gray[600],
  },
  textSmall: {
    fontSize: SIZES.small,
    color: COLORS.gray[500],
  },
  marginBottom: {
    marginBottom: SIZES.margin,
  },
});