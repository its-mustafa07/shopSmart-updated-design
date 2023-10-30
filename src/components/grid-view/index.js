import React from 'react';
import {View, ScrollView} from 'react-native';

const GridView = ({children}) => {
  return (
    <ScrollView
      style={{flex: 1}}
      // style={{
      //   flexDirection: 'row',
      //   flexWrap: 'wrap',
      //   alignSelf: 'center',
      //   width: '100%',
      //   paddingHorizontal: 25,
      //   marginTop: 15,
      //   rowGap: 25,
      //   width: '100%',
      // }}
      contentContainerStyle={
        {
          // flex: 1,
          // justifyContent: 'space-between',
          // flexDirection: 'row',
          // flexWrap: 'wrap',
          // alignSelf: 'center',
          // width: '100%',
          // paddingHorizontal: 25,
          // marginTop: 15,
          // rowGap: 25,
          // width: '100%',
        }
      }>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignSelf: 'center',
          width: '100%',
          paddingHorizontal: 25,
          marginTop: 15,
          rowGap: 25,
          width: '100%',
          // marginBottom: 40,
          // height: '100vh',
        }}>
        {children}
      </View>
    </ScrollView>
  );
};

export default GridView;
