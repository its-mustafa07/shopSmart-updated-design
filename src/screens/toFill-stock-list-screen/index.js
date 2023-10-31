import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
import ProfileHeader from '../../components/profile-header';
import useStyles from './styles';
import toRefillData from '../../data/TO_REFILL_DATA';
import ListItem from '../../components/list-item';
import ListTitleBar from '../../components/list-title-bar';
import GridItem from '../../utils/grid-item';
import CropString from '../../utils/crop-string';

const ToFillStockListScreen = () => {
  const styles = useStyles();

  const [gridView, setGridView] = useState(false);

  const handleGridIconPress = () => {
    setGridView(true);
  };

  const handleListIconPress = () => {
    setGridView(false);
  };

  return (
    <BackgroundGradient style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ProfileHeader style={styles.stockHeader} />
        <Text style={styles.stockTitle}>Home stock</Text>
        <ListTitleBar
          title={'Stock that needs refilling'}
          style={{marginTop: 10}}
          handleListPress={handleListIconPress}
          handleGridPress={handleGridIconPress}
        />
        {gridView ? (
          <View style={{flex: 1}}>
            <FlatList
              data={toRefillData}
              style={{flex: 1}}
              numColumns={2}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <GridItem quantity={true} title={CropString(item.title, 20)} />
              )}
              columnWrapperStyle={styles.columnWrapperStyle}
              contentContainerStyle={styles.gridContentContainerStyle}
            />
          </View>
        ) : (
          <FlatList
            data={toRefillData}
            renderItem={({item}) => (
              <ListItem
                title={CropString(item.title, 20)}
                style={{marginBottom: 20}}
                quantity={true}
              />
            )}
            keyExtractor={item => item.key}
            contentContainerStyle={styles.listContentContainerStyle}
          />
        )}
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default ToFillStockListScreen;
