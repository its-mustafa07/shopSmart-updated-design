import React from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import GridItem from '../../utils/grid-item';
import CropString from '../../utils/crop-string';

const GridView = ({data}) => {
  const screenWidth = Dimensions.get('window').width;
  const gapSize = screenWidth * 0.13;

  return (
    // <View style={styles.gridContainer}>
    <FlatList
      data={data}
      style={{flex: 1}}
      numColumns={2}
      keyExtractor={item => item.key}
      renderItem={({item}) => (
        <GridItem quantity={true} title={CropString(item.title, 20)} />
      )}
      columnWrapperStyle={{gap: gapSize}}
      contentContainerStyle={{
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignSelf: 'center',
        rowGap: 20,
      }}
    />
    // </View>
  );
};

export default GridView;
