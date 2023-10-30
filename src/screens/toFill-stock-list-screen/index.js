import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, ScrollView} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
import ProfileHeader from '../../components/profile-header';
import useStyles from './styles';
import toRefillData from '../../data/TO_REFILL_DATA';
import ListItem from '../../components/list-item';
import ListTitleBar from '../../components/list-title-bar';
import GridView from '../../components/grid-view';
import GridItem from '../../utils/grid-item';

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
        />
        {/* <FlatList
          data={toRefillData}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              style={{marginBottom: 20}}
              quantity={true}
            />
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={{paddingTop: 10}}
        /> */}
        <GridView>
          {toRefillData.map(item => (
            <GridItem title={item.title} key={item.key} />
          ))}
        </GridView>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default ToFillStockListScreen;
