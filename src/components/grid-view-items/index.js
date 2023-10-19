import {styles} from './styles';

import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import GridItem from '../../utils/grid-item';
import {GridItemData} from './data';
import {PlusIcon} from '../../../assets/svg-icons/svgIcons';
import BackgroundGradient from '../background-gradient';

const GridViewItems = () => {
  return (
    <BackgroundGradient>
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
    </BackgroundGradient>
  );
};

export default GridViewItems;
