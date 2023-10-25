import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DownIcon,
  PlusIcon,
  ThreeDotsIcon,
  UpIcon,
} from '../../../assets/svg-icons/svgIcons';
import useStyles from './styles';
import {ThemeContext} from '../themes/theme';

const ListItem = ({style, title}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();

  return (
    <View style={[styles.mainContainer, theme.boxShadow, style]}>
      <View style={styles.contentContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.iconContainer}>
            <PlusIcon />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleWithQuantity}>
              <Text style={styles.itemTitle}>{title}</Text>
              <View style={[styles.quantityContainer, theme.boxShadow]}>
                <Text style={styles.quantity}>7</Text>
              </View>
            </View>
            <Text style={styles.itemDate}>
              Added: {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.counterAndIcon}>
          <View style={styles.counter}>
            <TouchableOpacity>
              <UpIcon />
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantity}>7</Text>
            </View>
            <TouchableOpacity>
              <DownIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <ThreeDotsIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tagContainer}>
        <Text style={styles.tagTitle}>Home Stock</Text>
      </View>
    </View>
  );
};

export default ListItem;
