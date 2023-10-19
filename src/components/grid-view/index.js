import React from 'react';
import {View} from 'react-native';

const GridView = ({children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
      }}>
      {children}
    </View>
  );
};

export default GridView;
