import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
import ProfileHeader from '../../components/profile-header';
import useStyles from './styles';
import homeStockData from '../../data/HOME_STOCK-DATA';
import ListItem from '../../components/list-item';
import ListTitleBar from '../../components/list-title-bar';
import CropString from '../../utils/crop-string';
import GridItem from '../../utils/grid-item';

const HomeStockListScreen = () => {
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
          title={'Your home stock'}
          style={{marginTop: 10}}
          handleListPress={handleListIconPress}
          handleGridPress={handleGridIconPress}
        />
        {gridView ? (
          <View style={{flex: 1}}>
            <FlatList
              data={homeStockData}
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
            data={homeStockData}
            renderItem={({item}) => (
              <ListItem
                title={CropString(item.title, 20)}
                style={{marginBottom: 20}}
                quantity={true}
              />
            )}
            keyExtractor={item => item.key}
            contentContainerStyle={{paddingTop: 10}}
          />
        )}
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default HomeStockListScreen;
