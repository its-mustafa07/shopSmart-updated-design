const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  GridViewItems: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 44,
    rowGap: 60,
    columnGap: 30,
  },
});
