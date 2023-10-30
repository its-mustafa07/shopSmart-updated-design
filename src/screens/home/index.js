import React from 'react';
import ProfileHeader from '../../components/profile-header';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
import useStyles from './styles';
import {
  HomeScreenSettingsIcon,
  MyListIcon,
  MyStoresIcon,
  ScanItemsIcon,
  SearchProductIcon,
  StoresNearbyIcon,
} from '../../../assets/svg-icons/svgIcons';
import HomeItem from '../../components/home-item';
import GridView from '../../components/grid-view';

const HomeScreen = () => {
  const homeData = [
    {key: 1, icon: <MyListIcon />, heading: 'My List'},
    {key: 2, icon: <ScanItemsIcon />, heading: 'Scan Items'},
    {key: 3, icon: <MyStoresIcon />, heading: 'My Stores'},
    {key: 4, icon: <SearchProductIcon />, heading: 'Search Product'},
    {key: 5, icon: <StoresNearbyIcon />, heading: 'Stores Nearby'},
    {key: 6, icon: <HomeScreenSettingsIcon />, heading: 'Settings'},
  ];
  const styles = useStyles();
  return (
    <BackgroundGradient style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ProfileHeader style={styles.profileHeader} />
        <Text style={styles.homeText}>Home</Text>
        <View style={styles.flatList}>
          <GridView>
            {homeData.map(item => (
              <HomeItem
                key={item.key}
                icon={item.icon}
                heading={item.heading}
              />
            ))}
          </GridView>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default HomeScreen;
