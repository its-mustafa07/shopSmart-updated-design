import {styles, useStyle} from './styles';

import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GridItem from '../../utils/grid-item';
import {GridItemData} from './data';
import {
  GridViewIcon,
  ListViewIcon,
  PlusIcon,
  SearchIcon,
} from '../../../assets/svg-icons/svgIcons';
import BackgroundGradient from '../background-gradient';
import ProfileHeader from '../profile-header';
import ListTitleBar from '../list-title-bar';

const GridViewItems = ({navigation}) => {
  const styles = useStyle();
  return (
    <BackgroundGradient style={{flex: 1}}>
      <SafeAreaView style={styles.mainWrapper}>
        <ProfileHeader navigation={navigation} />
        <View>
          {/* <View style={styles.headingcontainer}>
            <Text style={styles.headingText}>Items List</Text>
            <View style={styles.iconContainer}>
              <GridViewIcon />
              <ListViewIcon />
              <SearchIcon />
            </View>
          </View> */}
          <ListTitleBar title="Items list" />
          <ScrollView>
            <View style={styles.GridViewItems}>
              {GridItemData.map(item => {
                return (
                  <GridItem
                    key={item.id}
                    title={item.title}
                    catogary={item.catogary}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

export default GridViewItems;
