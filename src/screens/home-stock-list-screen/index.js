import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
import ProfileHeader from '../../components/profile-header';
import useStyles from './styles';
import homeStockData from '../../data/HOME_STOCK-DATA';
import ListItem from '../../components/list-item';
import ListTitleBar from '../../components/list-title-bar';
import CropString from '../../utils/crop-string';

const HomeStockListScreen = () => {
  const styles = useStyles();

  return (
    <BackgroundGradient style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ProfileHeader style={styles.stockHeader} />
        <Text style={styles.stockTitle}>Home stock</Text>
        <ListTitleBar title={'Your home stock'} style={{marginTop: 10}} />
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
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default HomeStockListScreen;
